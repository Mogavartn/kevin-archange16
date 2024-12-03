"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerOne from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Features from "./features";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Testimonial from "./testimonial";
import Video from "./video";
import Tab from "./tab/tab";
import FooterThree from "@/components/layout/footers/footer-three";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Technology' />
            <HeaderOne />
            <BannerOne />
            <About />
            <Features />
            <ChooseUs />
            <Testimonial />
            <Portfolio />
            <Video />
            <Tab />
            <Blog />
            <FooterThree />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;