"use client"
import { useParams, useRouter } from "next/navigation";
import formationsData  from '@/components/data/formationt-date';
import PortfolioDetails from "@/components/pages/portfolio/portfolio-details";
import Tab from "@/components/pages/portfolio/portfolio-details/tab/tab";

const ServiceDetails = () => {
   const params = useParams();
    const router = useRouter();
    
    const id = params.id; 
    const id_formation = params['id-formation'];

    if (!id || !id_formation ) {
      return <div>Chargement...</div>;
    }

  // Trouve le groupe de formations avec l'ID de formation spécifié
  const selectedFormation = formationsData.find(
    (formationGroup) => formationGroup.id === id
  );

  // Trouve la formation spécifique dans la liste
  const formation = selectedFormation.liste_langue.find((f) => f.id === id_formation);

    if (!formation) {
        return router.push("/404-error");
    }
    
    return (
        <>
            <PortfolioDetails singleData={formation}/>
        </>
    );
};

export default ServiceDetails;