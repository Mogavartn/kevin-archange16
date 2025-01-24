import React from 'react';
import TabContent from './tab-content1';
import Link from 'next/link';

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
                    <div className="row col-xl-6 col-lg-6 col-md-6 align-items-center skill__two-tab-title-text">
                            <p><span className="fw-bold fs-4">Grâce à l’Ikigaï, on analyse ce qui compte vraiment :</span><br />
                                    👉 Est-ce que cette compétence te sert vraiment ?<br />
                                    👉 Lancer ton projet ? <br />
                                    👉 Ton idée est-elle viable et alignée avec qui tu es ?<br/>
                                    Pas de phrases toutes faites, pas d’artifice :<br /> juste toi, ton projet et des solutions qui te correspondent. Prêt·e à passer à l’action ? </p>
                    </div>
                    <div className="skill__two-tab-title">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mr-5">
                            <Link href="https://meet.brevo.com/kevin-a2ta2l/presentation" target="_blank">
                                <div className="skill__two-tab nav-link active " data-bs-toggle="pill" role="button">
                                    <span>J'ai besoin d'un accompagnement</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ml-5">
                            <Link href="https://www.kevin-attallah.com/formation-creation-entreprise" target="_blank">
                                <div className="skill__two-tab nav-link " data-bs-toggle="pill" data-bs-target="#topic-2" role="button">
                                    <span>Je suis autonome</span>
                                </div> 
                            </Link>                       
                        </div>
                    </div>
                    <div className="skill__two-tab-details">
                       {/*  <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active" role="tabpanel" id="topic-1" aria-labelledby="topic-1-tab"> */}
                            <div className="col-xl-6 col-lg-6 col-md-9 mr-5 formation_rigth">
                                <TabContent 
                                title={`Construisez votre entreprise avec un expert à vos côtés ! 💼`}
                                description="Profitez d’un accompagnement personnalisé pour chaque étape : de l’idée au lancement. Bénéficiez du soutien dont vous avez besoin pour transformer vos ambitions en succès durable 🚀."
                                description2="Et cerise sur le gateau, votre formation peut-être financée par votre CPF 💰."
                                servicesLeft={[
                                  "Plan d’action clair et efficace",
                                  "Conseil stratégique sur mesure"
                                ]}
                                servicesRight={[
                                  "Vous avancez comme vous voulez",
                                  "Accès à des outils pratiques et performants"
                                ]}
                                buttonText="Prendre RDV"
                                buttonLink="https://meet.brevo.com/kevin-a2ta2l/presentation"
                                />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-9 ml-5 ormation_left">
                                        <TabContent 
                                        title="Vous êtes prêt(e) à passer à l’action, à votre rythme et sans contraintes ! 💼"
                                        description="Profitez de notre formation complète pour construire votre projet d’entreprise en totale liberté. Vous avancez comme vous voulez, où vous voulez, avec des outils clairs et pratiques pour transformer vos idées en réalité 🚀."
                                        servicesLeft={[
                                        "Liberté totale",
                                        "Contenu 100% en ligne"
                                        ]}
                                        servicesRight={[
                                        "Créez Votre Entreprise",
                                        "Outils concrets et clés en main"
                                        ]}
                                        buttonText="Je lance mon business"
                                        buttonLink="https://www.kevin-attallah.com/formation-creation-entreprise"
                                    />
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Tab;