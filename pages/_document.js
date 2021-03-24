import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html className="text-gray-500 antialiased bg-white js-focus-visible">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
