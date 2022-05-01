import Head from 'next/head';
import { Fragment } from 'react';
import HeaderOne from '../components/header/header-1';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import useAbout from '@/query/about';
function AboutPage(props) {
    return (
        <Fragment>
            <Head>
                <title>About</title>
            </Head>
            <HeaderOne />
            <PageBanner />
            <About about={props.abouts[0]} />
            <Services services={props.services} />
            <Testimonial testimonialItems={props.testimonials} />
            <Brand companies={props.companies} />
            {/* <Team teamItems={props.teamItems} /> */}
        </Fragment>
    );
}

export async function getStaticProps() {
    const about = await useAbout();
    return {
        props: {
            ...about,
        },
        // incremental static generation 
        revalidate: 10,
    };
}

export default AboutPage;
