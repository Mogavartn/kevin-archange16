import { useState } from "react";
import ModalVideo from "react-modal-video";
import image1 from "../../../public/assets/img/skill/skill.png";
import image2 from "../../../public/assets/img/skill/skill-video-thumb.png";
import Link from "next/link";

const  SkillAreaF = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="skill-area__one section-padding">
                <div className="container">
                    <div className="row flex-wrap-reverse">
                        <div className="col-xl-6 col-lg-6 col-md-11">
                            <div className="skill-area__one-left">
                                <div className="skill-area__one-left-image">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="skill-area__one-left-video">
                                    <img src={image2.src} alt="image" />
                                    <div onClick={openVideoModal} className="video-popup skill-area__one-left-video-play-btn">
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-11">
                            <div className="skill-area__one-right section-padding-test">
                                <span className="subtitle-one">Qui est concerné</span>
                                <h2>🎯 Qui est concerné ?</h2>
                                <p>Cette formation s'adresse à tous ceux qui souhaitent entreprendre : étudiants, salariés en reconversion, ou toute personne avec un rêve d'entrepreneuriat.</p>
                                
        
                                <div className="skill-area__one-right-skill-item">
                                <Link href="/about" className="btn-two">Nous contacter<i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default  SkillAreaF;