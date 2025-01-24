import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';
import React, { useState, useEffect, useRef } from 'react';
import FormArea from '@/components/pages/contacts/form';

const SideBar = ({ isOpen, setIsOpen }) => {
    // Référence au sidebar pour détecter les clics en dehors
    const sidebarRef = useRef(null);

    // Utilisation de useEffect pour détecter un clic en dehors du sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false); // Fermer le sidebar si on clique en dehors
            }
        };

        // Ajouter l'écouteur d'événements lors du montage
        document.addEventListener('mousedown', handleClickOutside);

        // Nettoyage de l'écouteur d'événements lors du démontage
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`} ref={sidebarRef}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                        <i className="fal fa-times"></i>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-logo ">
                        <Link href='/'>
                            <img className='logo_one' src={logo2.src} alt="logo" />
                        </Link>
                    </div>    
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h5 className="text-center mb-3">Lancez votre business ou projet pro avec style ! 🚀 </h5>
                    <h5 className="text-start mb-2 pl-15">Nos Liens utiles</h5>
                    <div className="mb-4">
                        <div className="col-xl-12 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__three-widget border-one">
                                <div className="footer__three-widget-solution ">
                                    <ul>
                                        <li><Link href={`https://www.kevin-attallah.com/formation-creation-entreprise`} target="_blank"><i className="far fa-chevron-double-right"></i>Création d’Entreprise</Link></li>
                                        <li><Link href={`/services`} ><i className="far fa-chevron-double-right"></i>Voir le catalogue complet</Link></li>
                                        <li><Link href={`/blog`} ><i className="far fa-chevron-double-right"></i>Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <h5 className="text-start mb-2 pl-15">Restez Connecté</h5>
                <div className="header__area-menubar-right-sidebar-popup-social social__icon">
                        <div className="footer__three-widget-about mb-30 pl-15">
                            <form action="#">
                                <input type="text" name="email" placeholder="Votre e-mail" required="" />
                                <button type="submit"><i className="fas fa-paper-plane"></i></button>
                            </form>
                        </div>
                        <div className="sidebar__reseau pl-15">
                            <Social />
                        </div>
                        
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
