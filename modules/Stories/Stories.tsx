import { InfiniteStories } from '@/modules/InfiniteStories';
import { Layout } from '@/modules/Layout';
import type { PaginationProps, StoryWithImage } from 'types';

type Props = {
    stories: StoryWithImage[];
    pagination: PaginationProps;
};

const DEFAULT_TITLE = 'Prezly heartbeat ❤️';

const DEFAULT_DESCRIPTION = `
    Heartbeat.prezly.io is an internal newsroom for team announcements,
    strategy decisions or weekly company updates.
`;

export function Stories({ stories, pagination }: Props) {
    return (
        <Layout>
            <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg lg:max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            {DEFAULT_TITLE}
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            {DEFAULT_DESCRIPTION}
                        </p>
                    </div>
                    <InfiniteStories initialStories={stories} pagination={pagination} />
                </div>
            </div>
        </Layout>
    );
}

export default Stories;
