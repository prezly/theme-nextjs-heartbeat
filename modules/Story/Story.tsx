import { StoryFormatVersion } from '@prezly/sdk';
import type { ExtendedStory } from '@prezly/sdk';
import dynamic from 'next/dynamic';

import { StorySeo } from '@/components';
import { Layout } from '@/modules/Layout';

import { DiscourseComments } from './DiscourseComments';

type Props = {
    story: ExtendedStory;
    topicId?: number;
};

const SlateRenderer = dynamic(() => import('@/components/SlateRenderer'), { ssr: true });

export function Story({ story, topicId }: Props) {
    if (!story) {
        return null;
    }

    const { title, subtitle, format_version, content } = story;

    return (
        <Layout>
            <StorySeo story={story} />
            <article className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="384"
                                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                            />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="384"
                                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                            />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="384"
                                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        {story.categories.map((category) => (
                            <span
                                className="inline-flex items-center px-3 py-0.5 mr-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                key={category.id}
                            >
                                {category.display_name}
                            </span>
                        ))}

                        <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {title}
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 leading-8">{subtitle}</p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        {format_version === StoryFormatVersion.HTML && (
                            // eslint-disable-next-line react/no-danger
                            <div dangerouslySetInnerHTML={{ __html: content as string }} />
                        )}
                        {format_version === StoryFormatVersion.SLATEJS && (
                            <SlateRenderer nodes={JSON.parse(content as string)} />
                        )}

                        {topicId && <DiscourseComments topicId={topicId} />}
                    </div>
                </div>
            </article>
        </Layout>
    );
}
