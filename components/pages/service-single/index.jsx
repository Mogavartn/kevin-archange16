"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";

const ServicesSingle = ({serviceDetails}) => {
    const words = serviceDetails?.id.split(' ');
    const firstAndSecondWord = words?.slice(0, 2).join(' ');
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />            
            <HeaderOne />
            <BreadCrumb title={firstAndSecondWord} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;