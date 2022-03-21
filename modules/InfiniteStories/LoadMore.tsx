interface Props {
    isLoading: boolean;
    onLoadMore: () => void;
}

export function LoadMore({ isLoading, onLoadMore }: Props) {
    return (
        <button
            type="button"
            onClick={onLoadMore}
            disabled={isLoading}
            className="block mx-auto my-8 py-3 px-4 border border-gray-300 rounded-md font-bold bg-gray-100 hover:bg-white hover:border-white hover:shadow-md active:shadow-inner"
        >
            {isLoading ? 'Please wait...' : 'Load more'}
        </button>
    );
}
