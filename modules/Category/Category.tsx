import type { Story } from '@prezly/sdk';
import { useCurrentCategory } from '@prezly/theme-kit-nextjs';
import React from 'react';

import { Layout } from '@/modules/Layout';
import type { PaginationProps } from 'types';

import { InfiniteStories } from '../InfiniteStories';

interface Props {
    pagination: PaginationProps;
    stories: Story[];
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
            <h1>{currentCategory.display_name}</h1>
            <p>{currentCategory.display_description}</p>

            <InfiniteStories
                initialStories={stories}
                pagination={pagination}
                category={currentCategory}
            />
        </Layout>
    );
}
