// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Main, NextScript } from "next/document";

class GPNetworkDoc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="de">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Architektur - Brandschutzplanung - Sachverständiger für Immobilenbewertung - Sachverständiger für Baustäden - SiGe Koordinator"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/static/pubassets/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/static/pubassets/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/static/pubassets/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/static/pubassets/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/static/pubassets/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/static/pubassets/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/static/pubassets/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/static/pubassets/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/pubassets/favicons/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/pubassets/favicons/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/pubassets/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/pubassets/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/pubassets/favicons/favicon-128.png"
            sizes="128x128"
          />
          <meta name="msapplication-TileColor" content="#D6D6D6" />
          <meta
            name="msapplication-TileImage"
            content="/static/pubassets/favicons/mstile-144x144.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/static/pubassets/favicons/mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/static/pubassets/favicons/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/static/pubassets/favicons/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/static/pubassets/favicons/mstile-310x310.png"
          />
          <link rel="stylesheet" href="/static/pubassets/hk-grotesk.min.css" />
        </Head>
        <body>
          <div className="app">
            <Main />
            <NextScript />
          </div>
          <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js" />
        </body>
      </html>
    );
  }
}

export default GPNetworkDoc;
