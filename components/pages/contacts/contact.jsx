"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import FormAreaacc from "./formacc";
import FooterThree from "@/components/layout/footers/footer-three";
import Tab from "../home/tab/tab";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contactez-nous" />        
            <HeaderOne />
            <BreadCrumb title="Contactez-nous" innerTitle="Contactez-nous" />
            <Tab/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;