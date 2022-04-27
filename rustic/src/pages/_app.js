import '../styles/globals.css';
import { Fragment } from 'react';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { ScrollToTop } from '../components/scroll';
import client from '@/query/client';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Layout>
                <Head>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                    />
                    <link rel='shortcut icon' href='../favicon.png' />
                </Head>
                <Component {...pageProps} />
                <ScrollToTop />
            </Layout>
        </Fragment>
    );
}

export default MyApp;
