import { useCurrentCategory } from '@prezly/theme-kit-nextjs';
import React from 'react';

import { Layout } from '@/modules/Layout';
import type { PaginationProps, StoryWithImage } from 'types';

import { InfiniteStories } from '../InfiniteStories';

interface Props {
    pagination: PaginationProps;
    stories: StoryWithImage[];
}

export function Category({ pagination, stories }: Props) {
    const currentCategory = useCurrentCategory();
    if (!currentCategory) {
        return null;
    }

    return (
        <Layout 
            title={currentCategory.display_name}
            description={currentCategory.display_description || undefined}
        >
            <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            {currentCategory.display_name}
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            {currentCategory.display_description}
                        </p>
                    </div>

                    <InfiniteStories
                        initialStories={stories}
                        pagination={pagination}
                        category={currentCategory}
                    />
                </div>
            </div>
        </Layout>
    );
}
