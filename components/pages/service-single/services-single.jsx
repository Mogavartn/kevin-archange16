import image6 from "../../../public/assets/img/v1/2.jpg";

import dataFormation from '@/components/data/formationt-date';
import Link from 'next/link';


import { useParams } from 'next/navigation';

const ServicesSingleMain = () => {
    const params = useParams();
    const singleFormation = dataFormation.find((formation) => formation.id === params.id);
    return (
        <>
         <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                        {singleFormation.liste_langue?.map((data, id) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                <div className="services__two-single-service">
                                    <div className="services__two-single-service-icon">
                                        {data.icon}
                                    </div>
                                    <div className="services__two-single-service-image">
                                        <img className="img__full" src={image6?.src} alt={data.titre} />
                                    </div>
                                    <div className="services__two-single-service-content formation-solution">
                                        <h4>{data.intitule}</h4> {/* Titre de la catégorie */}
                                        <p>{data.description}</p> {/* Description du service */}
                                        <Link href={`/services/${singleFormation.id}/${data.id}`} className="btn-one mb-20 ml-20">
                                                Voir plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>      
        </>
    );
};

export default ServicesSingleMain;