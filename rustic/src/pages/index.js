import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Rustic - React Business Template</title>
                <meta
                    name='description'
                    content='Rustic - React Business Template is an excellent solution to the web designing needs for your website related to creative agency, business, portfolio, corporate, etc. '
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={props.heroItems} />
            <Services services={props.services} />
            <LatestProject projects={props.projects} />
            <About />
            <PricingTab pricingItems={props.pricingItems} />
            <Testimonial testimonialItems={props.testimonialItems} />
            <Brand brandItems={props.brandItems} />
            <FeaturedPost posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

export default HomePage;
