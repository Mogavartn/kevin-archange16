"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog' />
            <HeaderOne />
            <BreadCrumb title="Blog" innerTitle="Blog" />
            <BlogGridMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;