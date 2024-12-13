"use client"
import { useParams, useRouter } from "next/navigation";
import formationsData  from '@/components/data/listesFormation';
import PortfolioDetailsMain from "@/components/pages/portfolio/portfolio-details/portfolio-details";

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
    (formationGroup) => formationGroup.formation_id === id
  );

  console.log(selectedFormation);

  // Trouve la formation spécifique dans la liste
  const formation = selectedFormation.liste.find((f) => f.id === id_formation);

 console.log(formation);

    if (!formation) {
        return router.push("/404-error");
    }
    
    return (
        <>
            <PortfolioDetailsMain singleData={formation} />
        </>
    );
};

export default ServiceDetails;