import '../../public/styles/global.css'
import Head from "next/head";
import Header from "@/components/header/Header";

export const metadata = {
    title: 'Радуга цветов',
}

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href="/logo.png" type='image/png'/>
            </Head>
            <Header/>
            <div className='container__content'>
                <Component{...pageProps} />
            </div>
        </>
    )
}