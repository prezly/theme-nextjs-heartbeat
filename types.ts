export interface Env {
    NODE_ENV: 'production' | 'development' | 'test';
    PREZLY_ACCESS_TOKEN: string;
    PREZLY_NEWSROOM_UUID: string;
    DISCOURSE_USERNAME: string;
    DISCOURSE_API_URL: string;
    DISCOURSE_API_KEY: string;
    DISCOURSE_CATEGORY_ID: number;
}
