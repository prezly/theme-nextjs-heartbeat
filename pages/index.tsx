import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getPrezlyApi, withAuthorization } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';
import type { ExtendedStory } from '@prezly/sdk/dist/types';

type Props = {
    stories: Array<ExtendedStory>;
};

const IndexPage: FunctionComponent<Props> = ({ stories }) => (
    <Layout>
        <Stories stories={stories} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps<Props> = withAuthorization(async (context) => {
    const api = getPrezlyApi(context.req);
    const stories = await api.getAllStoriesExtended();

    return {
        props: { stories },
    };
});

export default IndexPage;
