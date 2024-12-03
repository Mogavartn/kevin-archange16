import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import about1 from "../../../public/assets/img/about/about-1.png";
import about2 from "../../../public/assets/img/about/about-2.png";
import Link from "next/link";
import Count from "../common/count";
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        // Sélectionner tous les conteneurs de défilement (les deux listes)
        const scrollContainers = document.querySelectorAll('.scroll');
        
        // Sélectionner tous les éléments dans les listes (de la première et de la seconde liste)
        const items = document.querySelectorAll('.brand__area-item');
        
        // Fonction pour mettre en pause l'animation
        const handleMouseEnter = () => {
          scrollContainers.forEach(container => {
            container.style.animationPlayState = 'paused'; // Met en pause l'animation sur tous les conteneurs
          });
        };
    
        // Fonction pour reprendre l'animation
        const handleMouseLeave = () => {
          scrollContainers.forEach(container => {
            container.style.animationPlayState = 'running'; // Reprend l'animation sur tous les conteneurs
          });
        };
    
        // Ajouter les événements de survol à tous les éléments
        items.forEach(item => {
          item.addEventListener('mouseenter', handleMouseEnter);
          item.addEventListener('mouseleave', handleMouseLeave);
        });
    
        return () => {
          // Nettoyage des événements
          items.forEach(item => {
            item.removeEventListener('mouseenter', handleMouseEnter);
            item.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

    return (
        <>
        <div className="brand__area pt-115">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about__one section-padding">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <i className="flaticon-consultant"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"><Count number={25}/></h4>
                                        <span>+</span>
                                    </div>
                                    <span>Années d'expérience</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about1.src} alt="image" className="image-1" />
                                <img src={about2.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">À Propos de nous</span>
                            <h2>Transformez vos ambitions en réussites concrètes</h2>
                            <p>Grâce à notre approche unique, nous vous aidons à donner vie à vos projets et à construire une carrière alignée sur vos valeurs. Découvrez comment vos aspirations peuvent devenir des réussites durables, porteuses de sens et de satisfaction personnelle.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Alignement stratégique</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Création impactante</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Transformation durable</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Croissance personnelle</span>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;