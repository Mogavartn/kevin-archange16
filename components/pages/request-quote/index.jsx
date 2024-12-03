"use client"
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../common/scroll/scroll-to-top';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Demander un devis" />
            <HeaderOne />
            <BreadCrumb title="Demander un devis" innerTitle="Demander un devis" />
            <RequestQuoteMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;