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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
