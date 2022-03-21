import type { PageProps } from '@prezly/theme-kit-nextjs';
import { NewsroomContextProvider } from '@prezly/theme-kit-nextjs';
import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps) {
    const { newsroomContextProps, ...customPageProps } = pageProps as PageProps;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <NewsroomContextProvider {...newsroomContextProps}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...customPageProps} />
        </NewsroomContextProvider>
    );
}

export default App;
