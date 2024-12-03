import servicesData from '@/components/data/decouvrir-data';
import Link from 'next/link';

const DecouvrirF  = () => {
    return (
        <>
            <div className="services__four section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <span className="subtitle-one">Ce que vous allez découvrir :</span>
                            <h2>Ce que vous allez découvrir :</h2>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData?.slice(0, 4).map((data, id) => {
							const words = data.title.split(' ');
							const firstAndSecondWord = words.slice().join(' ');
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                                    <div className="services__four-single-service">
                                        <div className="services__four-single-service-icon">
                                        {data.icon} 
                                        </div>
                                        <div className="services__four-single-service-content">
                                            <h4>{firstAndSecondWord}</h4>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>   
        </>
    );
};

export default DecouvrirF;