import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class LandingDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          {/* SEO Meta Tags */}
          <meta name="description" content="Create a stylish landing page for your business startup and get leads for the offered services with this free HTML landing page template." />
          <meta name="author" content="Guan Company" />

          {/* OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ */}
          <meta property="og:site_name" content="" /> {/* website name */}
          <meta property="og:site" content="" /> {/* website link */}
          <meta property="og:title" content="" /> {/* title shown in the actual shared post */}
          <meta property="og:description" content="" /> {/* description shown in the actual shared post */}
          <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
          <meta property="og:url" content="" /> {/* where do you want your post to link to */}
          <meta property="og:type" content="article" />

          {/* Styles */}
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext" rel="stylesheet" />
          <link href="/static/css/bootstrap.css" rel="stylesheet" />
          <link href="/static/css/fontawesome-all.css" rel="stylesheet" />
          <link href="/static/css/swiper.css" rel="stylesheet" />
          <link href="/static/css/magnific-popup.css" rel="stylesheet" />
          <link href="/static/css/styles.css" rel="stylesheet" />

          {/* Favicon  */}
          <link rel="icon" href="/static/images/favicon.png" />
        </Head>
        <body data-spy="scroll" data-target=".fixed-top">
          <Main />
          <NextScript />
          {/* Scripts */}
          <script src="/static/js/jquery.min.js"/> {/* jQuery for Bootstrap's JavaScript plugins */}
          <script src="/static/js/popper.min.js"/> {/* Popper tooltip library for Bootstrap */}
          <script src="/static/js/bootstrap.min.js"/> {/* Bootstrap framework */}
          <script src="/static/js/jquery.easing.min.js"/> {/* jQuery Easing for smooth scrolling between anchors */}
          <script src="/static/js/swiper.min.js"/> {/* Swiper for image and text sliders */}
          <script src="/static/js/jquery.magnific-popup.js"/> {/* Magnific Popup for lightboxes */}
          <script src="/static/js/validator.min.js"/> {/* Validator.js - Bootstrap plugin that validates forms */}
          <script src="/static/js/scripts.js"/> {/* Custom scripts */}
        </body>
      </Html>
    )
  }
}

export default LandingDocument;