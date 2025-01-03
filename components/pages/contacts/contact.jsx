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
            <SEO pageTitle="Avec-ou-sans-accompagnement" />        
            <HeaderOne />
            <BreadCrumb title="Avec ou sans accompagnement " innerTitle="Avec ou sans accompagnement" />
            <Tab/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;