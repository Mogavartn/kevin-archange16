import image1 from "../../../public/assets/img/about/about-two.png";
import image2 from "../../../public/assets/img/about/about-two-2.png";
import Link from "next/link";

const FormationF  = () => {
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
                                                    <span>75%</span>
                                                </div>
                                                <h4 className="about__two-right-progressbar-title">Daily Activity</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-content">
                                <span className="subtitle-one">Transformez votre idée</span>
                                <h2>Transformez votre idée</h2>
                                <p>Transformez votre idée en une véritable entreprise avec cette formation pratique et complète dédiée aux futurs entrepreneurs. Vous apprendrez toutes les étapes clés pour concevoir, structurer et lancer votre projet professionnel.</p>
                               
                                <Link href="/contact" className="btn-two">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormationF;