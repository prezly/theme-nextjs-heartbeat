import type { FunctionComponent } from 'react';
import type { Story } from '@prezly/sdk';
import { GetServerSideProps } from 'next';
import { getPrezlyApi, withAuthorization } from '@/utils/prezly';
import Layout from '@/components/Layout';
import Stories from '@/modules/Stories';

type Props = {
    stories: Array<ExtendedStory>;
}

const IndexPage: FunctionComponent<Props> = ({ stories }) => (
    <Layout>
        <Stories stories={stories} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps<Props> = withAuthorization(async (context) => {
    const api = getPrezlyApi(context.req);
    const stories = await api.getAllStories();

    return {
        props: { stories },
    };
};

export default IndexPage;
