"use client";
import MainMenu from '../header-menu';
import Search from '../search';
import { useEffect, useState } from 'react';
import SideBar from '../offcanvas';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import formulaire from "../../../../public/assets/img/icon/contact-mail.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Link from 'next/link';
import SideBarContact from '../offcanvas_cont';

const HeaderOne = ({variant}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarOpen1, setSidebarOpen1] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
        <div className="top__bar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-md-7">
                       
                    </div>
                    <div className="col-xl-5 col-md-5">

                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
            <div className="container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-box">
                           {/*  <div className="header__area-menubar-right-box-search">
                                <div className="search">	
                                    <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                        <i className="flaticon-loupe"></i>
                                    </span>
                                </div>
                            </div> */}
                            <div className="header__area-menubar-right-box-sidebar">
                                <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </div>
                            </div>
                            <div className="header__area-menubar-right-box-btn">
                                <button className="btn-one"  target="_blank"  onClick={() => setSidebarOpen1(true)}>Nous Contacter<i className="fas fa-arrow-right"></i></button>
                            </div>
                            <div className="header__area-menubar-right-box-btn1">
                                <i className=""  target="_blank"  onClick={() => setSidebarOpen1(true)}><img src={formulaire.src} alt="logo"/></i>
                            </div>
                            <div className="header__area-menubar-right-responsive-menu menu__bar">
                                <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <SideBarContact isOpen={sidebarOpen1} setIsOpen={setSidebarOpen1} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        <Search isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderOne;