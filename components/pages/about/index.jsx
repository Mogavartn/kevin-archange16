"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";
import About from "../home/about";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="À propos de nous" />
        <HeaderOne />
        <BreadCrumb title="À propos de nous" innerTitle="À propos de Ikigai" />
        <About />
        <FooterThree />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;