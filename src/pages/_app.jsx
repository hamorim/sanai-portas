import Head from 'next/head';
import { Header } from '../components/Header';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sanai Portas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="container">
        <Component {...pageProps} />
      </section>
    </>
  );
};

export default MyApp;
