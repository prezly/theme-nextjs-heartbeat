import type { Story } from '@prezly/sdk';

export type StoryWithImage = Story & Pick<Story.ExtraFields, 'thumbnail_image' | 'content'>;

export interface PaginationProps {
    currentPage: number;
    itemsTotal: number;
    pageSize: number;
}
