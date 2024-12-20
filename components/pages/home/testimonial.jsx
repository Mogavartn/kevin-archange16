import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";

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
                                <span className="subtitle-one">Témoignage client</span>
                                <h2>Découvrez ce que disent nos clients ! <span className="highlighted">transfor</span> </h2>
                                <Link href="/contact" className="btn-one">Obtenir de l'aide
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>M. Frederic</h4>
                                            <span>FM SERVICES</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star not-rated"></i>
                                        </div>
                                    </div>
                                    <p>Super formation, Kevin est au top</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Anthony J</h4>
                                            <span>Apprenant</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star not-rated"></i>
                                        </div>
                                    </div>
                                    <p>Accompagnement pro et sérieux, je recommande!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Sarah F</h4>
                                            <span>Citys & Co</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star not-rated"></i>
                                        </div>
                                    </div>
                                    <p>Kevin m'a accompagné de la création de mes statuts jusqu'à mon lancement, merci à lui !</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>David B</h4>
                                            <span>DB prestige</span>
                                        </div>
                                        <div className="single-slider-user-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star not-rated"></i>
                                        </div>
                                    </div>
                                    <p>J’hésitais avant ma formation à me lancer, du coup c'est décidé grâce aux conseils de Kevin</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                            <div className="testimonial__one-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
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

export default Testimonial;