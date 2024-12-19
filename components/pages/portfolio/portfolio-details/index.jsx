"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Tab from "./tab/tab";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.intitule} />
            <HeaderOne />
            <BreadCrumb title={singleData?.intitule} innerTitle={singleData?.intitule} />
            <Tab singleData={singleData} />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;