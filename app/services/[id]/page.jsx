"use client"
import { useParams, useRouter } from "next/navigation";
import ServicegData from '@/components/data/formationt-date';
import ServicesSingle from "@/components/pages/service-single";

const ServiceDetails = () => {
    const params = useParams();
    const singleFormation = ServicegData?.find((service) => service.id === params.id);
    const router = useRouter();
    if (!singleFormation) {
        return router.push("/404-error");
    }
    return (
        <>
            <ServicesSingle singleData={singleFormation} />
        </>
    );
};

export default ServiceDetails;