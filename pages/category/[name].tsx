import type { FunctionComponent } from 'react';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import { GetServerSideProps } from 'next';
import { getPrezlyApi, withAuthorization } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import { Category } from '@prezly/sdk/dist/types';

type Props = {
    stories: ExtendedStory[];
    category: Category
    categories: Category[]
};

const IndexPage: FunctionComponent<Props> = ({ category, stories, categories }) => (
    <Layout categories={categories}>
        <Stories stories={stories} title={category.display_name} description={category.display_description} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps<Props> = withAuthorization(async (context) => {
    const api = getPrezlyApi(context.req);
    const { name } = context.params as { name: string };
    const categories = await api.getCategories();
    const category = await api.getCategory(name as string);
    const stories = await api.getAllStoriesExtendedFromCategory(name as string);

    return {
        props: { stories, category, categories },
    };
});

export default IndexPage;
