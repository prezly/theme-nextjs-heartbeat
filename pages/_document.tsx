import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Html className="text-gray-900 leading-tight">
                <Head />
                <body className="min-h-screen bg-gray-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
