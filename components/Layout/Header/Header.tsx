import type { FunctionComponent } from 'react';

const Header: FunctionComponent = () => (
    <header className="relative bg-white">
        <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                    <a href="#" className="flex">
                        <span className="sr-only">Heartbeat</span>
                        <img className="h-24 w-auto" src="https://cdn.uc.assets.prezly.com/1a393240-1739-487c-a4bc-ed3c36f6b300/-/quality/best/-/format/auto/" alt="" />
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className=" md:flex-1 md:flex md:items-center md:justify-between">
                    <nav className="flex space-x-10" />
                    <div className="flex items-center md:ml-12">
                        <div className="relative">
                            <button
                                type="button"
                                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                aria-expanded="false"
                            >
                                <span>Categories</span>

                                <svg
                                    className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div
                                className="hidden absolute z-10 right transform -translate-x-1/2 mt-4 w-screen max-w-md sm:px-0"
                            >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">
                                                    Help Center
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Get all of your questions answered in our forums or contact support.
                                                </p>
                                            </div>
                                        </a>

                                        <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">
                                                    Guides
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Learn how to maximize our platform to get the most out of it.
                                                </p>
                                            </div>
                                        </a>

                                        <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">
                                                    Events
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    See what meet-ups and other events we might be planning near you.
                                                </p>
                                            </div>
                                        </a>

                                        <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">
                                                    Security
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Understand how we take your privacy seriously.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        </div>
                        <div className="-mr-2">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <nav>
                            <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                <a href="#" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Analytics
                                    </div>
                                </a>

                                <a href="#" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Engagement
                                    </div>
                                </a>

                                <a href="#" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Security
                                    </div>
                                </a>

                                <a href="#" className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                        Integrations
                                    </div>
                                </a>
                            </div>
                            <div className="mt-8 text-base">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {' '}
                                    View all products
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Pricing
                        </a>

                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Docs
                        </a>

                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Company
                        </a>

                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Resources
                        </a>

                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Blog
                        </a>

                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                            Contact Sales
                        </a>
                    </div>
                    <div className="mt-6">
                        <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <Link href="/" passHref> */}
        {/*    <a>Home</a> */}
        {/* </Link> */}
    </header>

);

export default Header;
