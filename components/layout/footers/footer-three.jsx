import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import servicesData from "@/components/data/listesFormation";
import Social from "@/components/data/social";

const FooterThree = () => {
    return (
        <>
        <div className="footer__three">
            <div className="container pt-80 pb-80">
                <div className="footer__three-top">
                    <h3>Rejoignez notre communauté sociale !</h3>
                    <div className="footer__three-top-social">
                        <Social />
                    </div>
                </div>
                <div className="row gy-4 justify-content-between">
                    <div className="col-xl-4 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__three-widget">
                            <div className="footer__three-widget-about">
                                <Link href="/"><img src={logo.src} alt="image" /></Link>
                                <p>Lancez votre business ou projet pro avec style 🚀 ! Coaching, formations et conseils pour aligner vos ambitions, vos talents et vos valeurs. Prêt à transformer vos idées en succès ?
                                </p>
                                <form action="#">
                                    <input type="text" name="email" placeholder="Votre e-mail" required="" />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                 </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Nos Formations</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href={`https://www.kevin-attallah.com/formation-creation-entreprise`} target="_blank"><i className="far fa-chevron-double-right"></i>Création d’Entreprise</Link></li>
									<li><Link href={`/services`} ><i className="far fa-chevron-double-right"></i>Voir le catalogue complet</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Resources​</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="https://www.kevin-attallah.com/catalogue" target="_blank"><i className="far fa-chevron-double-right"></i>Formations</Link></li>
									<li><Link href="/blog"><i className="far fa-chevron-double-right"></i>Blog</Link></li>
									<li><Link href="testimonial"></Link></li>
									<li><Link href="about"><i className="far fa-chevron-double-right"></i>A propos</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>© Kevin Attallah 2025</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="/contact">Prendre RDV</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterThree;