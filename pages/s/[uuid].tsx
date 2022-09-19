import type { ExtendedStory } from '@prezly/sdk';
import { getStoryPreviewPageServerSideProps, useCurrentStory } from '@prezly/theme-kit-nextjs';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Story = dynamic(() => import('@/modules/Story').then((mod) => mod.Story), { ssr: true });

const StoryPreviewPage: NextPage = () => {
    const currentStory = useCurrentStory();

    return <Story story={currentStory as ExtendedStory} />;
};

export const getServerSideProps = getStoryPreviewPageServerSideProps({});

export default StoryPreviewPage;
