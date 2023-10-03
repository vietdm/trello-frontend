import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root_app">
      <Head>
        <title>VietD</title>
        <link rel="shortcut icon" href="/images/logo/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
