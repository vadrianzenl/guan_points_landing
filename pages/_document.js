import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class LandingDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="description" content="Create a stylish landing page for your business startup and get leads for the offered services with this free HTML landing page template." />
          <meta name="author" content="Guan Company" />

          <meta property="og:site_name" content="" />
          <meta property="og:site" content="" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="article" />

          <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext" rel="stylesheet" />
          <link href="/static/css/bootstrap.css" rel="stylesheet" />
          <link href="/static/css/fontawesome-all.css" rel="stylesheet" />
          <link href="/static/css/swiper.css" rel="stylesheet" />
          <link href="/static/css/magnific-popup.css" rel="stylesheet" />
          <link href="/static/css/styles.css" rel="stylesheet" />

          <link rel="icon" href="/static/images/favicon.png" />
        </Head>
        <body data-spy="scroll" data-target=".fixed-top">
          <Main />
          <NextScript />

          <script src="/static/js/jquery.min.js"/>
          <script src="/static/js/popper.min.js"/>
          <script src="/static/js/bootstrap.min.js"/>
          <script src="/static/js/jquery.easing.min.js"/>
          <script src="/static/js/swiper.min.js"/>
          <script src="/static/js/jquery.magnific-popup.js"/>
          <script src="/static/js/validator.min.js"/>
          <script src="/static/js/scripts.js"/>
        </body>
      </Html>
    )
  }
}

export default LandingDocument;