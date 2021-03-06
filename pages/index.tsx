import {
    DEFAULT_PAGE_SIZE,
    getNewsroomServerSideProps,
    processRequest,
} from '@prezly/theme-kit-nextjs';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import type { PaginationProps, StoryWithImage } from '@/utils';

interface Props {
    stories: StoryWithImage[];
    pagination: PaginationProps;
}

const Stories = dynamic(() => import('@/modules/Stories'), { ssr: true });

function IndexPage({ stories, pagination }: Props) {
    return <Stories stories={stories} pagination={pagination} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { api, serverSideProps } = await getNewsroomServerSideProps(context);

    const page =
        context.query.page && typeof context.query.page === 'string'
            ? Number(context.query.page)
            : undefined;

    const { stories, storiesTotal } = await api.getStories({
        page,
        include: ['thumbnail_image', 'content'],
    });

    return processRequest(
        context,
        {
            ...serverSideProps,
            // TODO: This is temporary until return types from API are figured out
            stories: stories as StoryWithImage[],
            pagination: {
                itemsTotal: storiesTotal,
                currentPage: page ?? 1,
                pageSize: DEFAULT_PAGE_SIZE,
            },
        },
        '/',
    );
};

export default IndexPage;
