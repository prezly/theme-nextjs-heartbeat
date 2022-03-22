import { StoryFormatVersion } from '@prezly/sdk';
import type { ExtendedStory } from '@prezly/sdk';
import ReactDOMServer from 'react-dom/server';

import { SlateRenderer } from '@/components';

function getHeaders(env: NodeJS.ProcessEnv) {
    const { DISCOURSE_API_KEY, DISCOURSE_USERNAME } = env;

    /* eslint-disable @typescript-eslint/naming-convention */
    return {
        'Api-Key': DISCOURSE_API_KEY,
        'Api-Username': DISCOURSE_USERNAME,
        'Content-Type': 'application/json',
    };
    /* eslint-enable @typescript-eslint/naming-convention */
}

async function findTopicByTitle(env: NodeJS.ProcessEnv, title: string) {
    const { DISCOURSE_API_URL, DISCOURSE_CATEGORY_ID } = env;

    const response = await fetch(`${DISCOURSE_API_URL}c/${DISCOURSE_CATEGORY_ID}.json`, {
        method: 'GET',
        headers: getHeaders(env),
    });
    const data = await response.json();

    return data.topic_list.topics.find((topic: any) => topic.title === title);
}

function getStoryHtml(story: ExtendedStory): string {
    if (story.format_version === StoryFormatVersion.HTML) {
        return story.content as string;
    }

    if (story.format_version === StoryFormatVersion.SLATEJS) {
        return ReactDOMServer.renderToString(
            <SlateRenderer nodes={JSON.parse(story.content as string)} />,
        );
    }

    return '';
}

async function createTopicForStory(env: NodeJS.ProcessEnv, story: ExtendedStory) {
    const { DISCOURSE_API_URL, DISCOURSE_CATEGORY_ID } = env;

    const storyIntro = [
        `Story: [#${story.id}]`,
        `<h1>${story.title}</h1>`,
        `<h2>${story.subtitle}</h2>`,
        `Visit @ https://heartbeat.prezly.net/${story.slug}`,
        '<hr />',
    ].join('\n');

    const body = {
        title: `${story.title}`,
        category: DISCOURSE_CATEGORY_ID,
        raw: storyIntro + getStoryHtml(story),
    };

    const response_create = await fetch(`${DISCOURSE_API_URL}/posts.json`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: getHeaders(env),
    });

    return response_create.json();
}

export async function syncDiscourseThread(env: NodeJS.ProcessEnv, story: ExtendedStory) {
    // only sync posts after march
    if (story.published_at && story.published_at > '2021-03-01T00:00:01+00:00') {
        const discourseTopic =
            (await findTopicByTitle(env, story.title)) || (await createTopicForStory(env, story));

        return discourseTopic?.id as number;
    }

    return null;
}
