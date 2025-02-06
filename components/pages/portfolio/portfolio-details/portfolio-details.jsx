import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';
import Link from 'next/link';
import FaqOne from '../../faq/faq-one';
import { useState } from 'react';

const PortfolioDetailsMain = ({ singleData }) => {
  const [amount, setAmount] = useState(singleData?.formation?.prix || 69 * 100); // Dynamique à partir de singleData
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // Pour gérer le statut de chargement
  const [paymentUrl, setPaymentUrl] = useState(null); // Pour l'URL de paiement
  const [error, setError] = useState(null); // Pour afficher des erreurs

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null); // Réinitialise l'erreur avant de faire la requête
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount, // Utilise le prix dynamique
          currency, // Devise
          description: singleData?.formation?.nom || 'Formation', // Description dynamique ou valeur par défaut
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Si la commande est créée avec succès, redirige l'utilisateur vers l'URL de paiement
        setPaymentUrl(data.checkout_url); // Récupère l'URL de paiement de l'API Revolut
        window.location.href = data.checkout_url; // Redirection automatique vers la page de paiement
      } else {
        setError(data.error || 'Erreur inconnue lors de la création de la commande');
      }
    } catch (error) {
      console.error('Erreur de création de commande:', error);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="skill__two-tab-details-content mt-5 mb-5">
      <div className="row justify-content-center gy-4">
          <div className="col-xl-7">
            <div>
              <h2>{singleData?.titre}</h2>
              <p>{singleData?.formation?.description?.objectif}</p>
            </div>
            <div className="image-formation">
            <img className="img__full rounded mt-5" src={singleData?.image?.src} alt={singleData?.id} />
          </div>
          </div>
          <div className="col-xl-5 project-info-left">
            <div className="project-info">
                <div className="project-info-top">
                  <h4>{singleData?.titre}</h4>
                </div>
                <ul>
                  <li>Type:<span> {singleData?.formation?.type}</span></li>
                  <li>Durée:<span> {singleData?.formation?.duree}</span></li>
                  <li>Prix:<span className="value"> 69 €</span></li> {/* Affiche le prix dynamique */}
                  <li className="project-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>
                <div className="btn-achat-formation">
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="btn-one"
                  >
                    {isLoading ? 'Traitement...' : 'Acheter maintenant'}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                {paymentUrl && (
                  <div>
                    <p>Paiement réussi! <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Clique ici pour payer</a></p>
                  </div>
                )}
                {error && (
                  <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                    <p>{error}</p>
                  </div>
                )}
              </div>
              <div className="project-info mt-20">
              <div className="project-info-top">
                <h4>Profil des apprenants</h4>
              </div>
              <ul>
                <div className="">
                  <div>
                    <h6 className="text-dark fs-5 mb-2">Pour qui :</h6>
                    {singleData?.formation?.profil_apprenants?.pour_qui?.map((objectif, index) => (
                      <li key={index}><span>{objectif}</span></li>
                    ))}
                  </div>
                  <div>
                    <h6 className="text-dark fs-5 mb-2">Prérequis :</h6>
                    {singleData?.formation?.profil_apprenants?.prerequis?.map((objectif, index) => (
                      <li key={index}><span>{objectif}</span></li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </div>
      </div>
      <div className="skill__two-tab-details-content-service">
        <div>
          <div className="project-info ">
            <div className="project-info-top">
              <h4>Objectifs pédagogiques</h4>
            </div>
            <ul>
              {singleData?.formation?.objectifs_pedagogiques?.map((objectif, index) => (
                <li key={index}><span>{objectif}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="faq__three section-padding">
          <div className="">
            <div className="row">
              <div className="col-xl mr-20">
                <h4 className="text-light">Contenu de la formation</h4>
                <div className="faq-collapse pt-5">
                  <FaqOne singleData={singleData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="btn-one"
            >
            {isLoading ? 'Traitement...' : 'Acheter maintenant'}
              <i className="fas fa-arrow-right"></i>
          </button>
    </div>
  );
};

export default PortfolioDetailsMain;
