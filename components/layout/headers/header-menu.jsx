import Link from 'next/link';

const MainMenu = () => {

    // Fonction pour envoyer un événement Pixel lors d'un clic
    const handleMenuClick = (pageName) => {
        if (typeof window !== "undefined" && window.fbq) {
            // On envoie un événement 'PageView' pour chaque lien cliqué
            window.fbq('track', 'PageView', {
                page_name: pageName,  // Le nom de la page visitée
            });
        }
    };

    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/" onClick={() => handleMenuClick('Accueil')}>Accueil</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/about" onClick={() => handleMenuClick('À propos')}>À propos</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/categories" onClick={() => handleMenuClick('Formations')}>Formations</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/blog" onClick={() => handleMenuClick('Blog')}>Blog</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
