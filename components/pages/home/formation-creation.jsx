import image1 from "../../../public/assets/img/about/about-three.png";
import image2 from "../../../public/assets/img/about/about-four-1.png";
import Link from "next/link";

const FormationCreation = () => {
    return (
        <>
            <div className="about__two section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-left">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-7 col-md-6 col-6">
                                        <div className="about__two-left-image-left-side">
                                            <img src={image1.src} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-5 col-6">
                                        <div className="about__two-left-right-image">
                                            <img src={image2.src} alt="image" />
                                        </div>
                                        <div className="about__two-left-progressbar">
                                            <div className="about__two-left-progressbar-wrapper">
                                                <div className="about__two-left-progressbar-value">
                                                    <span>299</span>
                                                </div>
                                                <h4 className="about__two-right-progressbar-title">Euro (€)</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-content">
                                <span className="subtitle-one">Créez votre entreprise</span>
                                <h2>Créez votre entreprise et lancez votre activité avec succès ! 🚀</h2>
                                <p>On vous montre comment la transformer en business qui cartonne.</p>
                                <div className="about__two-content-service">
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Formation en ligne pratique et accessible.</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Contenu direct, sans  sans bla-bla.</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Tarif Unique.</span>
                                    </div>
                                </div>
                                <Link href="https://www.kevin-attallah.com/formation-creation-entreprise" className="btn-one" target="_blank">👉 Devenir Entrepreneur<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormationCreation;