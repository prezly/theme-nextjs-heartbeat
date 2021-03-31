import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getPrezlyApi } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import { Category, ExtendedStory } from '@prezly/sdk/dist/types';

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

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const api = getPrezlyApi(context.req);
    const { slug } = context.params as { slug: string };
    const categories = await api.getCategories();
    const category = await api.getCategoryBySlug(slug);

    if (!category) {
        return {
            notFound: true,
        };
    }

    const stories = await api.getAllStoriesExtendedFromCategory(category);

    return {
        props: { stories, category, categories },
    };
};

export default IndexPage;
