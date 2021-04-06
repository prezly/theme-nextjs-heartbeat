import type { Category, ExtendedStory } from '@prezly/sdk/dist/types';
import { GetServerSideProps, NextPage } from 'next';
import { getEnvVariables, getPrezlyApi } from '@/utils/prezly';
import Story from '@/modules/Story';
import Layout from '@/components/Layout';
import syncDiscourseThread from '@/utils/discourse/syncDiscourseThread';

type Props = {
    story: ExtendedStory;
    categories: Category[];
    topicId?: number;
};

const StoryPage: NextPage<Props> = ({ story, categories, topicId }) => (
    <Layout categories={categories}>
        <Story story={story} topicId={topicId} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    const api = getPrezlyApi(context.req);
    const { slug } = context.params as { slug?: string };
    const story = slug ? await api.getStoryBySlug(slug) : null;

    if (!story) {
        return { notFound: true };
    }
    const categories = await api.getCategories();
    const topicId = await syncDiscourseThread(getEnvVariables(context.req), story);

    return {
        props: {
            story,
            categories,
            topicId,
        },
    };
};

export default StoryPage;
