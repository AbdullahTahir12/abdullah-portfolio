// pages/_app.js
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sass/style.scss";
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import "../styles/flaticon.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Twitter Preview */}
        <meta
          property="og:title"
          content="Abdullah | Full‑Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Crafting responsive, secure web & mobile apps with React.js, Node.js, Next.js."
        />
        <meta property="og:image" content="/abd-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdullah | Full‑Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Crafting responsive, secure web & mobile apps with React.js, Node.js, Next.js."
        />
        <meta name="twitter:image" content="/abd-banner.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
