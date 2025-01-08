import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    const swiperConfig = {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000, // Temps entre les transitions des slides
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2, // Afficher 2 images à la fois sur les écrans moyens
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3, // Afficher 3 images à la fois sur les grands écrans
            spaceBetween: 20,
          },
        },
      };
    
      const [currentIndex, setCurrentIndex] = useState(0); // Initialiser l'index à 0

    const handleNext = () => {
        if (currentIndex < blogData.length - 1) {
            setCurrentIndex(currentIndex + 1); // Incrémenter l'index pour le prochain article
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Décrémenter l'index pour l'article précédent
        }
    };

    const currentPost = singleData; //blogData[currentIndex]; // L'article actuellement sélectionné

    console.log(currentPost);

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-8">
                        <div className="blog__details-thumb ">
                            <span className="date">{singleData.date} {singleData.month} {singleData.year}</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                        </div>
                        <div className="blog__details-content">
                            <div className="blog__details-content-top ">
                                <span>
                                    <i className="far fa-user"></i>
                                    Administrateur
                                </span>
                                <span>
                                    <i className="far fa-folder-open"></i>
                                    Catégorie
                                </span>
                                <span>
                                    <i className="far fa-comments"></i>
                                    Commentaires (05)
                                </span>
                                <div className="blog__details-quote ">
                                    <Swiper modules={[Navigation ]} {...swiperConfig} className="py-2">
                                        {singleData.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="single-slider">
                                                    <img src={image.src} alt={`Blog Image ${index + 1}`} />
                                                </div>
                                            </SwiperSlide>
                                    ))}
                                    </Swiper>
                                    <div className="blog__details-quote-bottom">
                                        <div className="slider-arrow">
                                            <i className="swiper-button-prev fas fa-arrow-left"></i>
                                            <i className="swiper-button-next fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details-pagination">
                            <div className="blog__details-pagination-btn blog__details-pagination-prev">
                                <Link href={``} onClick={handlePrev} disabled={currentIndex === 0} className="pagination-btn">
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                                <div className="blog__details-pagination-text">
                                    <span>Article précédent</span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="blog__details-pagination-btn blog__details-pagination-next">
                                <div className="blog__details-pagination-text">
                                    <span>Article suivant</span>
                                    <span></span>
                                </div>
                                <Link href={``} onClick={handleNext} disabled={currentIndex === blogData.length - 1} className="pagination-btn">
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default BlogSingleMain;