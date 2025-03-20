import formationData from "@/components/data/temoignages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import Link from "next/link";

console.log(formationData);

const Temoignage = () => {
    const slideControl = {
		spaceBetween: 35,
		slidesPerView: 3,
		centeredSlides: true,
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 1000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',  // Sélecteur pour la flèche précédente
            nextEl: '.swiper-button-next',  // Sélecteur pour la flèche suivante
        },
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			575: {
				slidesPerView: 1
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 3
			},
		}
    };

    return (
        <div className="portfolio__one section-padding">
            <div className="container custom__container">
                <Swiper modules={[Navigation, EffectFade, Autoplay]} {...slideControl} className="py-5">
                    {formationData?.map((data, id) => (
                        <SwiperSlide key={id} className="portfolio__one-single-portfolio single-portfolio">
                            <Link href={`/categories/${data.categorie}`}>
                            <img className="img" src={data.image.src} alt="image" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Flèches de navigation */}
                <div className="swiper-button">
                    <div className="swiper-button-prev fas fa-arrow-left border"></div>
                    <div className="swiper-button-next fas fa-arrow-right border"></div>
                </div>
            </div>
        </div>
    );
};

export default Temoignage;
