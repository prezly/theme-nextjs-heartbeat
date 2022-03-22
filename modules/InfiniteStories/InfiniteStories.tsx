import type { Category } from '@prezly/sdk';

import type { PaginationProps, StoryWithImage } from '@/utils';

import { useInfiniteStoriesLoading } from './lib';
import { LoadMore } from './LoadMore';
import { StoriesList } from './StoriesList';

interface Props {
    initialStories: StoryWithImage[];
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
