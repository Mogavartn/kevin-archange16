"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TwoColumns from "./two-columns";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio' />
            <HeaderOne />
            <BreadCrumb title="Portfolio" innerTitle="Portfolio" />
            <TwoColumns />        
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;