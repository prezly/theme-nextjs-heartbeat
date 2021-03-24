import prezlySDK from '@prezly/sdk';
import Category from '@prezly/sdk/dist/types/Category';

export class Prezly {
    private readonly sdk: prezlySDK;

    public constructor(accessToken: string) {
        this.sdk = new prezlySDK({ accessToken });
    }

    public async getCategories(newsroomId: number): Promise<Category[]> {
        const data = await this.sdk.newsroomCategories.list(newsroomId);

        return Array.isArray(data) ? data : Object.values(data);
    }

    public async getStory(id: number) {
        return this.sdk.stories.get(id);
    }

    public async fetchStoryBySlug(slug: string) {
        const jsonQuery = {
            $and: [
                { slug: { $eq: slug } },
                { $and: [{ lifecycle_status: { $in: ['published'] } }] },
                { $and: [{ visibility: { $in: ['public'] } }] },
            ],
        };

        const { stories } = await this.searchStories({
            limit: 1,
            jsonQuery: JSON.stringify(jsonQuery),
        });

        if (stories.length === 1) {
            return this.getStory(stories[0].id);
        }
    }

    public async getHomepageStories(limit = 6) {
        const jsonQuery = {
            $and: [
                // { "slug": { '$in': ['public']}},
                { $and: [{ lifecycle_status: { $in: ['published'] } }] },
                { $and: [{ visibility: { $in: ['public'] } }] },
            ],
        };

        const { stories } = await this.searchStories({
            limit,
            sortOrder: '-published_at',
            jsonQuery: JSON.stringify(jsonQuery),
        });

        const extendedStories = [];
        for (const story of stories) {
            const extendedStory = await this.getStory(story.id);

            extendedStories.push(extendedStory);
        }

        return extendedStories;
    }

    public async getStories(options = { limit: 1000 }) {
        return this.sdk.stories.list(options);
    }

    public async searchStories(options) {
        return this.sdk.stories.search(options);
    }
}
