import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Layout} from "@/Layout/Layout";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    if (!process.browser) React.useLayoutEffect = React.useEffect;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
