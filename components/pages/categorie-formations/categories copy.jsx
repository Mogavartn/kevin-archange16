import Link from 'next/link';
// import servicesData from '@/components/data/listesFormation';
//import servicesData from '@/components/data/formationsPrincipales';
import servicesData from '@/components/data/categoriesPrincipale';
import image1 from "@/public/assets/img/v1/CREATION-ENTREPRISE.jpg";

const CategoriesMain = () => {
    // Vérification et regroupement des services par catégorie
    const groupedServices = servicesData ? servicesData.reduce((acc, service) => {
        const { categorie } = service;
        if (!acc[categorie]) {
            acc[categorie] = [];
        }
        acc[categorie].push(service);
        return acc;
    }, {}) : {};  // Si servicesData est null ou undefined, utiliser un objet vide
   var categoryImage;
    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="portfolio__one-content-right text-lg-end">
                            <Link href="/services" className="btn-one">Toutes Nos Formations<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                        <div className="col-xl-12 col-lg-4 col-md-6">
                            <div className="services__two-single-service">
                                <div className="services__two-single-service-icon">
                                    {/* Vous pouvez ajouter une icône ou un contenu ici */}
                                </div>
                                <div className="services__two-single-service-image">
                                    <img className="img__full" src={image1?.src} alt="Création d'entreprise" />
                                </div>
                                <div className="services__two-single-service-content formation-solution">
                                    <h4 className="border">ENTREPRENEURS</h4> 
                                    <Link href={`/categories/Entrepreneur`} className="btn-one mb-20 ml-20">
                                            Voir les formations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Itérer sur les catégories */}
                        {Object.keys(groupedServices).length > 0 ? (
                            Object.keys(groupedServices).map((category, index) => (
                                 categoryImage = groupedServices[category][0].image.src,
                                 console.log(groupedServices),
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="services__two-single-service">
                                        <div className="services__two-single-service-icon">
                                            {/* Vous pouvez ajouter une icône ou un contenu ici */}
                                        </div>
                                        <div className="services__two-single-service-image">
                                            {/* Afficher une image ou icône pour la catégorie */}
                                            <img className="img__full" src={category.image?.src} alt={category} />
                                        </div>
                                        <div className="services__two-single-service-content formation-solution">
                                            <h4>{category}</h4>  {/* Titre de la catégorie */}
                                            <Link href={`/categories/${category}`} className="btn-one mb-20 ml-20">
                                                Voir les formations
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-xl-12">
                                <p>Aucune catégorie disponible pour le moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesMain;
