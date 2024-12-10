"use client"
import { useParams, useRouter } from "next/navigation";
import ServicegData from '@/components/data/services-data';
import BlogDetails from '@/components/pages/blog-details';
import ServicesSingle from "@/components/pages/service-single";

const ServiceDetails = () => {
    const params = useParams();
    const singleData = BlogDetails?.find((service) => service.id === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }
    return (
        <>
            <ServicesSingle singleData={singleData} />
        </>
    );
};

export default ServiceDetails;