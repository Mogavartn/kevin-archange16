"use client"
import { useParams, useRouter } from "next/navigation";
import ServicegData from '@/components/data/listesFormation';
import PortfolioDetailsMain from "@/components/pages/portfolio/portfolio-details/portfolio-details";

const ServiceDetails = () => {
   // const params = useParams();
    const router = useRouter();
    const { id, id2 } = router.query;

    if (!id || !id2) {
        return <div>Chargement...</div>; // Optionnel : affiche un message de chargement
      }
    
      const singleFormation = ServicegData.liste?.find(
        (service) => service.id === id && service.subId === id2
      );

    if (!singleFormation) {
        return router.push("/404-error");
    }
    return (
        <>
            <PortfolioDetailsMain singleData={singleFormation} />
        </>
    );
};

export default ServiceDetails;