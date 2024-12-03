"use client"
import SEO from "@/components/data/seo";
import FooterThree from "@/components/layout/footers/footer-three";
import HeaderOne from "@/components/layout/headers/header/header-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import BreadCrumb from "../common/breadcrumb";
import FormationF from "./formation ";
import DecouvrirF from "./decouvrir ";
import SkillAreaF from "./skillF";
import WorkProcess from "./work";
import BannerFormation from "./banner-formation";

const FormationFaceboouk = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={`formation Facebook`} />
            <HeaderOne />
            <BreadCrumb title="Créez votre entreprise et lancez votre activité avec succès !" innerTitle="Créez votre entreprise et lancez votre activité avec succès !" />
            <FormationF />
            <DecouvrirF />
            <SkillAreaF />
            <WorkProcess />
            <BannerFormation />
            <FooterThree />        
            <ScrollToTop />
        </>
    );
};

export default FormationFaceboouk;