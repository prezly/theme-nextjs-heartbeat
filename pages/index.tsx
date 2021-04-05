import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getPrezlyApi } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import { Category, Newsroom } from '@prezly/sdk/dist/types';
import { PageSeo } from '@/components/seo';

type Props = {
    stories: ExtendedStory[];
    categories?: Array<Category>;
    newsroom: Newsroom;
};

const IndexPage: FunctionComponent<Props> = ({ stories, categories, newsroom }) => (
    <>
        <PageSeo
            title={newsroom.display_name}
            description=""
            url={newsroom.url}
            // @ts-expect-error
            imageUrl={newsroom.newsroom_logo.cdnUrl}
        />
        <Layout categories={categories}>
            <Stories stories={stories} />
            <Stories
                stories={stories}
                title="Prezly heartbeat ❤️"
                description={`
            Heartbeat.prezly.io is an internal newsroom for team announcements,
            strategy decisions or weekly company updates.
            `}
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
