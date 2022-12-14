import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
            rel="stylesheet"
            async
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700&display=optional"
            rel="stylesheet"
            async
          />
          <script type="text/javascript" src="static/robocode.js" async />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
