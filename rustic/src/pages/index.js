import { Fragment } from 'react';
import Meta from '@/components/meta';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '@/components/home-page/about';
import useHomePage from '@/query/home';
import Testimonial from '@/components/home-page/testimonial';
import Brand from '@/components/home-page/brand';
function HomePage(props) {
    return (
        <Fragment>
            <Meta />
            <HeaderOne />
            <Hero heroItems={props.heroes} />
            <Services services={props.services} />
            <Testimonial testimonialItems={props.testimonials} />
            <Brand companies={props.companies} />
            <About about={props.abouts[0]} />
            {/* <LatestProject projects={props.projects} /> */}
        </Fragment>
    );
}

export async function getStaticProps() {
    const hero = await useHomePage();
    return {
        props: {
            ...hero,
        },
        // incremental static generation 
        revalidate: 10,
    };
}

export default HomePage;
