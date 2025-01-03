import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";
import VideoPage from "../video/video";

const Testimonial = () => {
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },			
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

    return (
        <>        
        <div className="testimonial__one section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-left" style={{backgroundImage: `url(${testimonialBg.src})`}}>
                            <div className="testimonial__one-left-title">
                                <span className="subtitle-one">Témoignages</span>
                                <h2>Découvrez ce que disent nos <span className="highlighted">apprenant(e)s</span> </h2>
                                <Link href="/contact" className="btn-one">Contactez-nous
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-right">
                            <video
                                src="/assets/video/temoig.webm" // Chemin relatif depuis le dossier public
                                autoPlay
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                className=""
                                >
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </>
    );
};

export default Testimonial;