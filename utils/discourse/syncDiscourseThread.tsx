import { FormatVersion } from '@prezly/sdk/dist/types/Story';
import ReactDOMServer from 'react-dom/server';
import SlateRenderer from '@/components/SlateRenderer';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import { Env } from 'types';

const findTopicByTitle = async (env: Env, title: string) => {
    const { DISCOURSE_API_URL, DISCOURSE_API_KEY, DISCOURSE_USERNAME } = env;
    const headers = {
        'Api-Key': DISCOURSE_API_KEY,
        'Api-Username': DISCOURSE_USERNAME,
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${DISCOURSE_API_URL}c/7.json`, { method: 'GET', headers });
    const data = await response.json();

    return data.topic_list.topics.find((topic) => topic.title === title);
};

const getStoryHtml = (story: ExtendedStory) : string => {
    if (story.format_version === FormatVersion.HTML) {
        return story.content as string;
    }

    if (story.format_version === FormatVersion.SLATEJS) {
        return ReactDOMServer.renderToString(<SlateRenderer nodes={JSON.parse(story.content as string)} />);
    }

    return '';
};

const createTopicForStory = async (env: Env, story: ExtendedStory) => {
    const { DISCOURSE_API_URL, DISCOURSE_API_KEY, DISCOURSE_USERNAME } = env;
    const headers = {
        'Api-Key': DISCOURSE_API_KEY,
        'Api-Username': DISCOURSE_USERNAME,
        'Content-Type': 'application/json',
    };

    const storyIntro = [
        `Story: [#${story.id}]`,
        `<h1>${story.title}</h1>`,
        `<h2>${story.subtitle}</h2>`,
        `Visit @ https://heartbeat.prezly.net/${story.slug}`,
        '<hr />',
    ].join('\n');

    const body = {
        title: `${story.title}`,
        category: 7,
        raw: storyIntro + getStoryHtml(story),
    };

    const response_create = await fetch(`${DISCOURSE_API_URL}/posts.json`, {
        method: 'post',
        body: JSON.stringify(body),
        headers,
    });

    return response_create.json();
};

const syncDiscourseThread = async (env: Env, story: ExtendedStory) => {
    const discourseTopic = await findTopicByTitle(env, story.title) || await createTopicForStory(env, story);

    return discourseTopic?.id;
};

export default syncDiscourseThread;
