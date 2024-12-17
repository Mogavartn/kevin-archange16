import Link from 'next/link';
import servicesData from '@/components/data/formationt-date';

const ServicesMain = () => {
    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                        {servicesData?.map((data, id) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                <div className="services__two-single-service">
                                    <div className="services__two-single-service-icon">
                                        {data.icon}
                                    </div>
                                    <div className="services__two-single-service-image">
                                        <img className="img__full" src={data.image?.src} alt={data.titre} />
                                    </div>
                                    <div className="services__two-single-service-content formation-solution">
                                        <h4>{data.titre}</h4> {/* Titre de la catégorie */}
                                        <p>{data.description}</p> {/* Description du service */}
                                        <Link href={`/services/${data.id}`} className="btn-one mb-20 ml-20">
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

export default ServicesMain;