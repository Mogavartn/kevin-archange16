import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import brand6 from "../../../public/assets/img/brand/brand-6.png";
import brand7 from "../../../public/assets/img/brand/brand-7.png";
import about1 from "../../../public/assets/img/about/about-1.png";
import about2 from "../../../public/assets/img/about/about-2.png";
import Link from "next/link";
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
        <div className="brand__area pt-50 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="mb-20 text-center">
                                <h3>Suivez-nous sur les réseaux sociaux!</h3>
                            </div>
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.linkedin.com/in/kevin-jean" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.instagram.com/kevin_a2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://web.facebook.com/profile.php?id=61563587830934" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com/@kevin-A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://x.com/Kevin_A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand6.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.tiktok.com/@kevin_attallah" target="_blank" rel="noopener noreferrer">
                                            <img src={brand7.src} alt="image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.linkedin.com/in/kevin-jean" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.instagram.com/kevin_a2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://web.facebook.com/profile.php?id=61563587830934" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com/@kevin-A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://x.com/Kevin_A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand6.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.tiktok.com/@kevin_attallah" target="_blank" rel="noopener noreferrer">
                                            <img src={brand7.src} alt="image" />
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
                                <i className="fa fa-people-carry"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"></h4>
                                        <span></span>
                                    </div>
                                    <span>Accompagnement</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about2.src} alt="image" className="image-1" />
                                <img src={about1.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Qui sommes-nous</span>
                            <h2>Faites passer vos ambitions au niveau supérieur 🚀
                            </h2>
                            <p>Avec notre méthode quia faites preuves, on transforme vos idées en succès concrets ! Que ce soit
                                pour donner vie à un projet ou aligner votre carrière avec vos valeurs, on vous accompagne à
                                chaque étape. Ensemble, créons des réussites qui ont du sens et un vrai impact.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Des objectifs clairs et alignés 😎</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Des projets qui marquent 💡</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Une transformation durable 🌱</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Un développement personnel boosté ✨</span>
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