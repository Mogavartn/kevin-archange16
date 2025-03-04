"use client"
import { useParams, useRouter } from "next/navigation";
import dataFormation from '@/components/data/formationsPrincipales';

import CategorieSingle from "@/components/pages/service-single";


const ServiceDetails = () => {
   // Récupération des paramètres d'URL
   const params = useParams();
   const categoryId = params.id; // L'ID de la catégorie est passé dans l'URL

   // Filtrer les formations par catégorie
   const formationsInCategory = dataFormation.filter((formation) => formation.categorie === categoryId);
    return (
        <>
            <CategorieSingle singleData={formationsInCategory}/>
        </>
    );
};

export default ServiceDetails;