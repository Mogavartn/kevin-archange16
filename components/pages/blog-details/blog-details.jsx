import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import icon from '../../../public/assets/img/icon/blog-details-quote.png';
import image from '../../../public/assets/img/blog/blog-details.png';
import avatar1 from '../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../public/assets/img/avatar/avatar-3.jpg';

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
    

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-8">
                        <div className="blog__details-thumb">
                            <span className="date">{singleData.date} {singleData.month} {singleData.year}</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                        </div>
                        <div className="blog__details-content">
                            <div className="blog__details-content-top">
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
                                <div className="blog__details-quote">
                                    <Swiper {...swiperConfig}>
                                        {singleData.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                            <div className="single-slider">
                                                <img src={image.src} alt={`Blog Image ${index + 1}`} />
                                            </div>
                                            </SwiperSlide>
                                    ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details-pagination">
                            <div className="blog__details-pagination-btn blog__details-pagination-prev">
                                <Link href="/blog/software-development-agility-a-primer" className="pagination-btn">
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                                <div className="blog__details-pagination-text">
                                    <span>Article précédent</span>
                                    <span>Insure your peace of mind</span>
                                </div>
                            </div>
                            <div className="blog__details-pagination-btn blog__details-pagination-next">
                                <div className="blog__details-pagination-text">
                                    <span>Article suivant</span>
                                    <span>Coverage you can count on</span>
                                </div>
                                <Link href="/blog/cloud-computing-solutions-for-business" className="pagination-btn">
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                       {/*  <div className="blog__details-comments">
                            <h3>3 commentaires</h3>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar2.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Stanio lainto</h5>
                                        <span>16 février 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar3.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Court Henry</h5>
                                        <span>16 février 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                        </div> */}
                        {/* <form action="#" className="blog__details-comment-form">
                            <h3>Leave a comment</h3>
                            <p>By using form u agree with the message sorage, you can contact us directly now By using form agree with the message sorage, you can contact us directly now</p>
                            <input type="text" placeholder="Name" />
                            <textarea placeholder="Message here..."></textarea>
                            <input type="submit" value="Sent Message" />
                        </form> */}
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