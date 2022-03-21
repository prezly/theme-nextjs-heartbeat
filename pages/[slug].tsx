import {
    getEnvVariables,
    getNewsroomServerSideProps,
    getPrezlyApi,
    processRequest,
    useCurrentStory,
} from '@prezly/theme-kit-nextjs';
import type { GetServerSideProps } from 'next';

import { Story } from '@/modules/Story';
import { syncDiscourseThread } from '@/utils';

type Props = {
    topicId?: number;
};

function StoryPage({ topicId }: Props) {
    const currentStory = useCurrentStory();

    if (!currentStory) {
        return null;
    }

    return <Story story={currentStory} topicId={topicId} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const api = getPrezlyApi(context.req);

    const { slug } = context.params as { slug?: string };
    const story = slug ? await api.getStoryBySlug(slug) : null;

    if (!story) {
        return { notFound: true };
    }

    // We are passing the story object to detect locale from the story itself
    // since the locale code is not part of the URL (e.g. /my-story).
    const { serverSideProps } = await getNewsroomServerSideProps(context, { story });

    // TODO: Add generic type to theme-kit-nextjs
    const env = getEnvVariables(context.req);
    // @ts-expect-error
    const { DISCOURSE_API_URL } = env;
    // @ts-expect-error
    const topicId = DISCOURSE_API_URL ? await syncDiscourseThread(env, story) : null;

    return processRequest(context, {
        ...serverSideProps,
        newsroomContextProps: {
            ...serverSideProps.newsroomContextProps,
            currentStory: story,
        },
        topicId,
    });
};

export default StoryPage;
