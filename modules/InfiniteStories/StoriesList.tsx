import { StoryCard } from '@/components';
import type { StoryWithImage } from 'types';

interface Props {
    stories: StoryWithImage[];
}

export function StoriesList({ stories }: Props) {
    return (
        <div className="mt-12 mx-auto grid gap-5 lg:grid-cols-3">
            {stories.map((story) => (
                <StoryCard key={story.uuid} story={story} />
            ))}
        </div>
    );
}
