import Link from 'next/link';
import ReadingTime from 'reading-time';
import Image from '@prezly/uploadcare-image';

import { StoryWithImage } from 'types';

import { getStoryThumbnail } from './lib';

type Props = {
    story: StoryWithImage;
};

export function StoryCard({ story }: Props) {
    const image = getStoryThumbnail(story);

    const { published_at, content } = story;
    const publicationDate = published_at ? new Date(published_at) : undefined;
    const readingTime = ReadingTime(content);

    return (
        <Link href={`/${story.slug}`} passHref>
            <a>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        {image
                        && (
                            <Image
                                lazy
                                imageDetails={image}
                                alt={story.title}
                                layout="fill"
                                height={240}
                                sizes={{
                                    mobile: 732,
                                    tablet: 315,
                                    allDesktops: 382,
                                    default: 1200,
                                }}
                                objectFit="cover"
                                objectPosition="center center"
                                className="h-48 w-full"
                            />
                        )}
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="h-6">
                                {story.categories.map((category) => (
                                    <span
                                        className="inline-flex items-center px-3 py-0.5 mr-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                        key={category.id}
                                    >
                                        {category.display_name}
                                    </span>
                                ))}
                            </div>
                            <div className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 h-8">
                                    {story.title}
                                </p>
                                <p className="mt-3 text-base text-gray-500 h-12">
                                    {story.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime="2020-03-16">
                                    {publicationDate?.toLocaleDateString()}
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span>
                                    {readingTime.text}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}
