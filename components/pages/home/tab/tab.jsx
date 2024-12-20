import React from 'react';
import TabContent from './tab-content';

const Tab = () => {
    return (
        <>
            <div className="skill__two section-padding">
                <div className="container">
                    <ul className="row nav mb-5 gy-4 justify-content-center">
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="skill__two-tab nav-link active " id="topic-1-tab" data-bs-toggle="pill" data-bs-target="#topic-1" role="button" aria-controls="topic-1">
                            <span>Prise de Rendez-vous</span>
                        </div>
                        </li>
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="skill__two-tab nav-link " id="topic-2-tab" data-bs-toggle="pill" data-bs-target="#topic-2" role="button" aria-controls="topic-2">
                                <span>Inscription Directe</span>
                            </div>
                        </li>
                    </ul>
                    <div className="skill__two-tab-details tab-content">
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active" role="tabpanel" id="topic-1" aria-labelledby="topic-1-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent 
                                title="Prenez rendez-vous en ligne"
                                description="Planifiez un rendez-vous avec l’un de nos experts en toute simplicité. Que ce soit pour une consultation, une présentation ou une assistance, nous sommes là pour vous aider"
                                servicesLeft={[
                                  "Flexibilité totale",
                                  "Conseils d’experts"
                                ]}
                                servicesRight={[
                                  "Prise en charge rapide",
                                  "Service personnalisé"
                                ]}
                                buttonText="Contactez-nous"
                                buttonLink="/contact"
                                />
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade" role="tabpanel" id="topic-2" aria-labelledby="topic-2-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent 
                                title="Inscrivez-vous dès maintenant"
                                description="Rejoignez notre communauté et accédez à tous nos services en quelques clics ! En vous inscrivant, vous pourrez profiter d'avantages exclusifs et d'une expérience personnalisée qui répondra à vos besoins."
                                servicesLeft={[
                                  "Accès immédiat",
                                  "Offres exclusives"
                                ]}
                                servicesRight={[
                                  "Sécurisé et rapide",
                                  "Accès personnalisé"
                                ]}
                                buttonText="Contactez-nous"
                                buttonLink="https://www.kevin-attallah.com/formation-creation-entreprise"/>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two1.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Tab;