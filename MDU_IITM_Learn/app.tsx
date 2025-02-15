import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BTech Notes - MDU & IITM</title>
        <meta name="description" content="Get comprehensive handwritten notes for MDU and IITM BTech students." />
        <meta name="keywords" content="BTech Notes, MDU Notes, IITM Notes, Engineering Notes" />
        <meta name="author" content="Shubham Shukla" />
        <meta property="og:title" content="BTech Notes - MDU & IITM" />
        <meta property="og:description" content="Comprehensive handwritten notes for BTech students." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo/ogimage.png" />
        <meta property="og:url" content="https://mduiitmlearn.vercel.app" />
        <meta name="meta:description" content="Comprehensive handwritten notes for BTech students." />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
