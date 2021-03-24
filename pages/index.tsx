import type { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { getEnvVariables } from 'utils/prezly';
import { Prezly } from 'utils/providers/prezly';
import Layout from 'components/Layout';
import Stories from 'modules/Stories';
import type { ExtendedStory } from '@prezly/sdk/dist/types';

type Props = {
    stories: Array<ExtendedStory>;
}

const IndexPage: FunctionComponent<Props> = ({ stories }) => (
    <Layout>
        <Stories stories={stories} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const env = getEnvVariables(context.req);
    const prezlyAPI = new Prezly(env.PREZLY_ACCESS_TOKEN);

    const stories = await prezlyAPI.getHomepageStories();

    return {
        props: { stories },
    };
};

export default IndexPage;
