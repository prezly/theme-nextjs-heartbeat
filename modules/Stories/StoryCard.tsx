import type { FunctionComponent } from 'react';
import Link from 'next/link';
import ReadingTime from 'reading-time';
import type { ExtendedStory } from '@prezly/sdk/dist/types';
import Image from '@/components/Image';

type Props = {
    story: ExtendedStory;
};

const StoryCard: FunctionComponent<Props> = ({ story }) => {
    const { preview_image, header_image, social_image } = story;
    let imageToUse = preview_image;
    if (!preview_image && social_image) {
        imageToUse = social_image;
    }

    if (!preview_image && header_image) {
        imageToUse = header_image;
    }

    if (imageToUse) {
        imageToUse = JSON.parse(imageToUse);
    }

    const publicationDate = new Date(story.published_at);
    const readingTime = ReadingTime(story.content);

    return (
        <Link key={story.id} href={`/story/${story.id}`} passHref>
            <a>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={story.id}>

                    <div className="flex-shrink-0">
                        {imageToUse
                        && (
                            <Image
                              lazy
                              imageDetails={imageToUse as any}
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
                                    >
                                        {category.display_name}
                                    </span>
                                ))}
                            </div>
                            <a href="#" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 h-8">
                                    {story.title}
                                </p>
                                <p className="mt-3 text-base text-gray-500 h-12">
                                    {story.subtitle}
                                </p>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime="2020-03-16">
                                    {publicationDate.toLocaleDateString()}
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
};

export default StoryCard;
