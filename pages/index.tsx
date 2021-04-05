import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getPrezlyApi } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import { Category, Newsroom } from '@prezly/sdk/dist/types';
import { PageSeo } from '@/components/seo';
import getAssetsUrl from '@/utils/prezly/getAssetsUrl';

type Props = {
    stories: ExtendedStory[];
    categories?: Array<Category>;
    newsroom: Newsroom;
};

const description = `
    Heartbeat.prezly.io is an internal newsroom for team announcements,
    strategy decisions or weekly company updates.
`;

const IndexPage: FunctionComponent<Props> = ({ stories, categories, newsroom }) => (
    <>
        <PageSeo
            title={newsroom.display_name}
            description={description}
            url={newsroom.url}
            imageUrl={getAssetsUrl(newsroom.newsroom_logo?.uuid as string)}
        />
        <Layout categories={categories}>
            <Stories
                stories={stories}
                title="Prezly heartbeat ❤️"
                description={description}
            />
        </Layout>
    </>
);

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const api = getPrezlyApi(context.req);
    const stories = await api.getStoriesExtended();
    const categories = await api.getCategories();
    const newsroom = await api.getNewsroom();

    return {
        props: { stories, categories, newsroom },
    };
};

export default IndexPage;
