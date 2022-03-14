import type { FunctionComponent } from 'react';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import StoryCard from 'modules/Stories/StoryCard';

type Props = {
    stories: ExtendedStory[];
    title?: string;
    description?: string | null;
};

const Stories: FunctionComponent<Props> = ({ title, description, stories }) => (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    {description}
                </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {stories.map((story) => (
                    <StoryCard key={story.uuid} story={story} />
                ))}
            </div>
        </div>
    </div>
);

export default Stories;
