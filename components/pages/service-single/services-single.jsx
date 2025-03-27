import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import dataFormation from '@/components/data/formationsPrincipales';
import Link from 'next/link';

const CategorieSingleMain = () => {
    // Récupération des paramètres d'URL
    const params = useParams();
    const categoryId = params.id; // L'ID de la catégorie est passé dans l'URL

    // Filtrer les formations par catégorie
    const formationsInCategory = dataFormation.filter((formation) => formation.categorie === categoryId);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            if (!window.fbq.isInitialized) {
                window.fbq('init', 'YOUR_PIXEL_ID'); // Remplace par ton ID de pixel
                window.fbq.isInitialized = true;  // Marque comme initialisé
            }
    
            // Événement ViewContent
            window.fbq('track', 'ViewContent', {
                content_name: `Page de Formations - ${categoryId}`,
                content_category: 'Formations',
                value: 0.0,
                currency: 'EUR',
            });
        }
    }, [categoryId]);  // Exécuter à chaque changement de catégorie

    /* // Fonction de suivi des clics sur "Voir plus"
    const trackClickFormation = (formation) => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: formation.titre,
                content_category: 'Formations',
                value: 0.0,
                currency: 'EUR',
            });
        }
    }; */

    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                        {formationsInCategory.length > 0 ? (
                            formationsInCategory.map((formation, index) => (
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="services__two-single-service">
                                        <div className="services__two-single-service-icon">
                                            {/* Affichage de l'icône si elle est présente */}
                                            {formation.icon}
                                        </div>
                                        <div className="services__two-single-service-image">
                                            <img className="img__full" src={formation.image?.src} alt={formation.titre} />
                                        </div>
                                        <div className="services__two-single-service-content formation-solution">
                                            <h4>{formation.titre}</h4> {/* Titre de la formation */}
                                            <Link
                                                href={formation.lien ? formation.lien : `/services/${formation.id}`}
                                                className="btn-one mb-20 ml-20"
                                                onClick={() => trackClickFormation(formation)} // Suivi du clic
                                            >
                                                Voir plus
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-xl-12">
                                <p>Aucune formation disponible dans cette catégorie.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategorieSingleMain;
