import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { HeaderLayout } from "../components/HeaderLayout"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <HeaderLayout>
        <Head>
          <title>OVG</title>
          <meta name="application-name" content="Price Monitor"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
          <meta name="apple-mobile-web-app-title" content="Price Monitor"/>
          <meta name="description" content="Поиск выгодных цен на продукты"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="theme-color" content="#FFFFFF"/>
        </Head>
        <Component {...pageProps} />
      </HeaderLayout>
  )
}