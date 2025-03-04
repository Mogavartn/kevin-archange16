import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">À propos</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/categories" >Formations </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog</Link>   
                </li>
            </ul>
        </>
    );
};

export default MainMenu;