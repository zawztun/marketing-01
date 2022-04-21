import '../styles/globals.css';
import { Fragment } from 'react';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { ScrollToTop } from '../components/scroll';
import { ApolloProvider } from "@apollo/client";
import client from '@/query/client';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <ApolloProvider client={client}>
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
            </ApolloProvider>
        </Fragment>
    );
}

export default MyApp;
