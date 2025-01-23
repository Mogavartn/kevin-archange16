import Link from 'next/link';
import servicesData from '@/components/data/listesFormation';
import image1 from "@/public/assets/img/v1/CREATION-ENTREPRISE.jpg"


const ServicesMain = () => {
    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                            <div className="col-xl-12 col-lg-4 col-md-6">
                                <div className="services__two-single-service">
                                    <div className="services__two-single-service-icon">
                                        
                                    </div>
                                    <div className="services__two-single-service-image">
                                        <img className="img__full " src={image1?.src} alt="{data.titre}" />
                                    </div>
                                    <div className="services__two-single-service-content formation-solution">
                                        <h4>Créez votre entreprise et lancez votre activité avec succès ! 🚀</h4> 
                                        <Link href={`/business` } className="btn-one mb-20 ml-20">
                                                Voir plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                                        <h4>{data.titre}</h4> 
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