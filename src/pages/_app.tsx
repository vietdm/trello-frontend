import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Comfortaa } from 'next/font/google'
import Loading from "@/components/layouts/Loading";

const comfortaa = Comfortaa({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root_app" className={comfortaa.className}>
      <Head>
        <title>VietD</title>
        <link rel="shortcut icon" href="/images/logo/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Loading />
    </div>
  );
}
