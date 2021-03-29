import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getPrezlyApi, withAuthorization } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import { Category } from '@prezly/sdk/dist/types';

type Props = {
    stories: ExtendedStory[];
    categories?: Array<Category>
};

const IndexPage: FunctionComponent<Props> = ({ stories, categories }) => (
    <Layout categories={categories}>
        <Stories stories={stories} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps<Props> = withAuthorization(async (context) => {
    const api = getPrezlyApi(context.req);
    const stories = await api.getAllStoriesExtended();
    const categories = await api.getCategories();

    return {
        props: { stories, categories },
    };
});

export default IndexPage;
