import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';
import React, { useState, useEffect, useRef } from 'react';

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
                {/* Bouton de fermeture */}
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>

                {/* Logo */}
                <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href='/'>
                        <img className='logo_one' src={logo2.src} alt="logo" />
                    </Link>
                </div>

                {/* Description */}
                <p>Lancez votre business ou projet pro avec style 🚀 ! Coaching, formations et conseils pour aligner vos ambitions, vos talents et vos valeurs. Prêt à transformer vos idées en succès ?</p>

                {/* Informations de contact */}
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="mb-30">Entrer en contact avec nous</h4>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Appelez maintenant</span>
                            <h6><Link href="https://wa.me/33756949491" target="_blank" rel="noopener noreferrer">+33 (756) 94 94 91</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Email</span>
                            <h6><Link href="mailto:kevin@jak-company.com">kevin@jak-company.com</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Office Address</span>
                            <h6><Link href="https://google.com/maps" target="_blank">France</Link></h6>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="header__area-menubar-right-sidebar-popup-social social__icon">
                    <Social />
                </div>
            </div>

            {/* Overlay pour masquer l'arrière-plan quand le sidebar est ouvert */}
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
