import type { FunctionComponent } from 'react';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import StoryCard from 'modules/Stories/StoryCard';

type Props = {
    stories: ExtendedStory[];
};

const Stories: FunctionComponent<Props> = ({ stories }) => (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    Prezly heartbeat ❤️
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Heartbeat.prezly.io is an internal newsroom for team announcements, strategy decisions or weekly company updates.
                </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {stories.map((story) => (
                    <StoryCard story={story} />
                ))}
            </div>
        </div>
    </div>
);

export default Stories;
