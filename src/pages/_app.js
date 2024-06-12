import '../../public/styles/global.css'
import Head from "next/head";
import Header from "@/components/header/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import {CartProvider} from "@/context/CartContext";


export const metadata = {
    title: 'Радуга цветов',
    url: 'http://w98325ou.beget.tech/api',
}

export default function MyApp({ Component, pageProps }) {
    const [userAuth,setUserAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserAuth(true);
            const userData = async () => {
                const response = await axios.get('http://w98325ou.beget.tech/api/auth/user')
                console.log(response.data);
            }
        }
    }, []);
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <link rel="icon" href="/logo.png" type='image/png'/>
            </Head>
            <CartProvider>
                <Header userAuth={userAuth} setUserAuth={setUserAuth}/>
                <div className='container__content'>
                    <Component{...pageProps}/>
                </div>
            </CartProvider>
        </>
    )
}