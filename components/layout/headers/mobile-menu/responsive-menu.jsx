"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Accueil</Link>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='/about'>À propos</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Formations</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/blog'>Blog</Link>
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;