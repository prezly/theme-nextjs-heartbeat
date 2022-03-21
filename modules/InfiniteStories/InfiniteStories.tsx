import type { Category, Story } from '@prezly/sdk';

import type { PaginationProps } from 'types';

import { useInfiniteStoriesLoading } from './lib';
import { LoadMore } from './LoadMore';
import { StoriesList } from './StoriesList';

interface Props {
    initialStories: Story[];
    pagination: PaginationProps;
    category?: Category;
}

export function InfiniteStories({ initialStories, pagination, category }: Props) {
    const { canLoadMore, isLoading, loadMoreStories, stories } = useInfiniteStoriesLoading(
        initialStories,
        pagination,
        category,
    );

    return (
        <>
            <StoriesList stories={stories} />
            {canLoadMore && <LoadMore isLoading={isLoading} onLoadMore={loadMoreStories} />}
        </>
    );
}
