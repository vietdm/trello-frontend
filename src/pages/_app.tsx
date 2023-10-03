import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {Comfortaa} from 'next/font/google'
import Loading from "@/components/layouts/Loading";
import {wrapper} from "@/stores/store";
import {FC} from "react";
import createEmotionCache from '@emotion/cache'
import {Provider} from "react-redux";
import {CacheProvider} from "@emotion/react";

const comfortaa = Comfortaa({
  weight: '400',
  subsets: ['latin'],
});

const clientSideEmotionCache = createEmotionCache({key: 'app-cached'});

const App: FC<AppProps> = ({Component, ...rest}: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
    <div id="root_app" className={comfortaa.className}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>VietD</title>
            <link rel="shortcut icon" href="/images/logo/favicon.ico"/>
          </Head>
          <Component {...pageProps} />
          <Loading/>
        </CacheProvider>
      </Provider>
    </div>
  );
}

export default App;
