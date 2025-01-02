import React from 'react';
import TabContent from './tab-content';

const Tab = () => {
    return (
        <>
            <div className="skill__two section-padding">
                <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-9 col-lg-9 col-md-12 services__one-title">
                        <span className="subtitle-one">Je veux lancer mon business</span>
                        <h2>Je veux lancer mon business🧑‍💼</h2>
                    </div>
                </div>
                    <ul className="row nav mb-5 gy-4 justify-content-center">
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="skill__two-tab nav-link active " id="topic-1-tab" data-bs-toggle="pill" data-bs-target="#topic-1" role="button" aria-controls="topic-1">
                            <span>J'ai besoin d'un accompagnement</span>
                        </div>
                        </li>
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="skill__two-tab nav-link " id="topic-2-tab" data-bs-toggle="pill" data-bs-target="#topic-2" role="button" aria-controls="topic-2">
                                <span>Je suis autonome, je gère mon ikigaï</span>
                            </div>
                        </li>
                    </ul>
                    <div className="skill__two-tab-details tab-content">
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active" role="tabpanel" id="topic-1" aria-labelledby="topic-1-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent 
                                title={`Faites financer votre avenir sans dépenser 💰 !`}
                                description="Prenez rendez-vous avec un conseiller et
                                            découvrez comment utiliser votre CPF pour réaliser vos ambitions, sans reste à charge ✨ . Et aussi
                                            bénéficier d’une aide pour choisir votre formation"
                                servicesLeft={[
                                  "Flexibilité totale",
                                  "Conseils d’experts"
                                ]}
                                servicesRight={[
                                  "Prise en charge rapide",
                                  "Service personnalisé"
                                ]}
                                buttonText="Prendre RDV"
                                buttonLink="https://meet.brevo.com/kevin-a2ta2l"
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
                                title="Vous savez quelle formation suivre !"
                                description="Alors prenez les choses en main 💪🏼 ! Financez votre
                                            formation en toute liberté et commencez à construire votre succès dès maintenant. Vous avez le
                                            contrôle, on vous donne les clés 🚀 ."
                                servicesLeft={[
                                  "Accès immédiat",
                                  "Offres exclusives"
                                ]}
                                servicesRight={[
                                  "Sécurisé et rapide",
                                  "Accès personnalisé"
                                ]}
                                buttonText="Commencez"
                                buttonLink="https://www.kevin-attallah.com/catalogue"/>
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