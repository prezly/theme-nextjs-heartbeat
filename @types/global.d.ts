import type { PrezlyEnv } from '@prezly/theme-kit-nextjs';

declare global {
    export namespace NodeJS {
        export interface ProcessEnv extends PrezlyEnv {
            NODE_ENV: 'production' | 'development' | 'test';
            DISCOURSE_USERNAME: string;
            DISCOURSE_API_URL: string;
            DISCOURSE_API_KEY: string;
            DISCOURSE_CATEGORY_ID: number;
        }
    }
    interface Window {
        DiscourseEmbed?: {
            discourseUrl: string;
            topicId?: number;
        };
    }
}
