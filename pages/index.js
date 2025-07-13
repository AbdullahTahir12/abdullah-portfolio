import React, { Fragment } from "react";
import Head from "next/head";
import About from "../components/about/about";
import BlogSection from "../components/BlogSection/BlogSection";
import CommonHead from "../components/commonHead";
import ContactArea from "../components/ContactArea";
import ExprienceSec from "../components/Exprience/Exprience";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Scrollbar from "../components/scrollbar/scrollbar";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
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

      <div id="scrool">
        <CommonHead />
        <Fragment>
          <div className="br-app">
            <Navbar />
            <Hero />
            <About />
            <ServiceSection />
            <ExprienceSec />
            <ProjectSection />
            {/* <Testimonial/> */}
            {/* <Pricing/> */}
            <ContactArea />
            {/* <BlogSection/> */}
            <Footer />
            <Scrollbar />
          </div>
        </Fragment>
      </div>
    </>
  );
}
