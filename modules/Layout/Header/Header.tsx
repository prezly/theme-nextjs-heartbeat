/* eslint-disable max-len */
import { useCategories } from '@prezly/theme-kit-nextjs';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function Header() {
    const categories = useCategories();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { asPath } = useRouter();

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [asPath]);

    return (
        <header>
            <div className="w-full text-gray-700 bg-white">
                <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="px-4 flex flex-row items-center justify-between">
                        <div>
                            <Link href="/" passHref>
                                <a className="flex">
                                    <span className="sr-only">Heartbeat</span>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="h-24 w-auto"
                                        src="https://cdn.uc.assets.prezly.com/1a393240-1739-487c-a4bc-ed3c36f6b300/-/quality/best/-/format/auto/"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                        <button
                            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                            onClick={toggleMenu}
                            type="button"
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav className="relative flex-col flex-grow md:pb-0 md:flex md:justify-end md:flex-row">
                        <button
                            onClick={toggleMenu}
                            className={classNames(
                                'hidden md:flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:mt-0 md:ml-4',
                                'text-sm font-semibold text-left bg-transparent rounded-lg',
                                'hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline',
                            )}
                            type="button"
                        >
                            <span>Categories</span>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute z-10 -top-2 md:top-8 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-80">
                                <div className="px-2 py-2 bg-white rounded-md shadow">
                                    {categories?.map((category) => {
                                        const locales = Object.keys(category.i18n);
                                        const locale =
                                            locales.filter((l) => !!category.i18n[l].slug)[0] ||
                                            locales[0];
                                        return (
                                            <Link
                                                key={category.id}
                                                href={`/category/${category.i18n[locale].slug}`}
                                            >
                                                <a
                                                    className={classNames(
                                                        'block px-4 py-2 rounded-lg md:mt-0 bg-transparent',
                                                        'hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline',
                                                    )}
                                                >
                                                    <span className="font-bold">
                                                        {category.display_name}
                                                    </span>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {category.display_description}
                                                    </p>
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
