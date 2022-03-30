import type { PageProps } from '@prezly/theme-kit-nextjs';
import { NewsroomContextProvider } from '@prezly/theme-kit-nextjs';
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

const isProduction = process.env.NODE_ENV === 'production';

function App({ Component, pageProps }: AppProps) {
    const { newsroomContextProps, ...customPageProps } = pageProps as PageProps;

    return (
        <PlausibleProvider domain="heartbeat.prezly.net" enabled={isProduction}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <NewsroomContextProvider {...newsroomContextProps}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...customPageProps} />
            </NewsroomContextProvider>
        </PlausibleProvider>
    );
}

export default App;
