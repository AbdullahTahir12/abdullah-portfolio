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
          content="Abdullah Tahir | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="Crafting responsive, secure web & mobile apps with React.js, Node.js, Next.js."
        />
        <meta
          property="og:image"
          content="https://abdullah-portfolio-du9e.vercel.app/abd-banner.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://abdullah-portfolio-du9e.vercel.app/abd-banner.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          name="twitter:image"
          content="https://abdullah-portfolio-du9e.vercel.app/abd-banner.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdullah Tahir | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Crafting responsive, secure web & mobile apps with React.js, Node.js, Next.js."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
