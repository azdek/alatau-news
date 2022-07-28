import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="theme-color" content="#0D54A5" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
