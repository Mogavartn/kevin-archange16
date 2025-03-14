import banner1 from "../../../public/assets/img/banner/banner-right-img.jpg";
import bannerShape from "../../../public/assets/img/shape/banner-shape.png";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const BannerOne = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
            <>
            <div className="banner__one"> 
                <div className="banner-shape">
                    <div className="shape banner-shape-1"></div>
                    <div className="shape banner-shape-2"></div>
                    <div className="shape banner-shape-3"></div>
                    <div className="shape banner-shape-4"></div>
                    <img className="shape banner-shape-5" src={bannerShape.src} alt="image" />
                    <div className="shape banner-shape-7"></div>
                    <div className="shape banner-shape-6"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__one-content">
                            <span className="subtitle-one">Boostez votre succès</span>
                                <h2 className="text-center">Donne du sens à ta <span>vie!</span></h2>
                                <p>Tu veux monter ton business ou développer de nouvelles compétences ? ✨</p>
                                <p>👉 On t’aide à trouver ce qui a du sens pour toi, sans blabla ni perte de temps.<br/>
                                👉 Coaching, formations et conseils pour aligner vos ambitions, vos talents et vos valeurs. <br />🔥Prêt à transformer vos idées en succès ?🔥</p>
                                <div className="grid grid-cols-1 gap-10 justify-content-between">
                                    <Link href="/business" className="btn-two mb-10  teste">👉 Je veux lancer mon business
                                    </Link>
                                    <Link href="/categories" className="btn-one ml-10 ">👉 Je veux me former
                                    </Link>                                
                                </div>                                
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__one-image">
                                <div className="banner__one-image-wrapper">
                                    <div className="banner__one-image-wrapper-shapes animate-rotate">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                    <img src={banner1.src} alt="banner-image" />
                                        <span className="video-play-btn-one" onClick={openVideoModal}>
                                            <i className="fas fa-play"></i>
                                        </span>
                                        <h6>Découvrir l’ikigaï</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="UnV3KK7hQeg" onClose={() => setOpenVideo(false)} />
            </div>
        </>

    );
};

export default BannerOne;