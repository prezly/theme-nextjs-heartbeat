import { StoryCard } from '@/components';
import { StoryWithImage } from 'types';

interface Props {
    stories: StoryWithImage[];
}

export function StoriesList({ stories }: Props) {
    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {stories.map((story) => (
                <StoryCard key={story.uuid} story={story} />
            ))}
        </div>
    );
}
