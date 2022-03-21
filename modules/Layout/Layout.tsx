import {
    getNewsroomLogoUrl,
    useCompanyInformation,
    useCurrentLocale,
    useGetLinkLocaleSlug,
    useNewsroom,
} from '@prezly/theme-kit-nextjs';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { stripHtml } from 'string-strip-html';

import { PageSeo } from '@/components';
import { getAbsoluteUrl } from '@/utils';

import { Header } from './Header';

interface Props {
    description?: string;
    imageUrl?: string;
    title?: string;
}

const DEFAULT_TITLE = 'Prezly heartbeat ❤️';

const DEFAULT_DESCRIPTION = `
    Heartbeat.prezly.io is an internal newsroom for team announcements,
    strategy decisions or weekly company updates.
`;

export function Layout({
    children,
    description = DEFAULT_DESCRIPTION,
    imageUrl,
    title = DEFAULT_TITLE,
}: PropsWithChildren<Props>) {
    const currentLocale = useCurrentLocale();
    const newsroom = useNewsroom();
    const companyInformation = useCompanyInformation();
    const getLinkLocaleSlug = useGetLinkLocaleSlug();
    const { asPath } = useRouter();

    return (
        <>
            <PageSeo
                title={title}
                description={description || stripHtml(companyInformation.about).result}
                url={getAbsoluteUrl(asPath, newsroom.url, getLinkLocaleSlug(currentLocale))}
                imageUrl={imageUrl || getNewsroomLogoUrl(newsroom)}
                siteName={companyInformation.name}
                locale={currentLocale}
            />
            <Header />
            <main>{children}</main>
        </>
    );
}
