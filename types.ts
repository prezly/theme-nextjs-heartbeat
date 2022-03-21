import { ExtraStoryFields, Story } from '@prezly/sdk';

export type StoryWithImage = Story & Pick<ExtraStoryFields, 'thumbnail_image' | 'content'>;

export interface PaginationProps {
    currentPage: number;
    itemsTotal: number;
    pageSize: number;
}