import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <title>Matheus Lima</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;