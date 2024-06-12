import "./my-app/public/styles/global.css";
import Head from "next/head";
import Header from "@/components/header/Header";
import { Provider } from "@/context/Context";
import { metadata } from "@/app/page";

export default function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Provider>
        <Header />
        <div className="container__content">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
