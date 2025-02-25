"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PortfolioDetailsMain = ({ singleData }) => {
  const router = useRouter();
  const [amount, setAmount] = useState(singleData?.formation?.prix || 0.01 * 100); // Montant dynamique
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  // Fonction pour créer une commande
  const createOrder = async () => {
    // Validation des données
    if (!amount || amount <= 0) {
      setError('Le montant de la commande est invalide.');
      return;
    }
    setIsLoading(true); // Activer l'état de chargement
    setError(null); // Réinitialiser les erreurs

    const orderData = {
      amount: amount, // Montant de la commande
      currency: currency, // Devise
      description: singleData?.formation?.nom
    };
    
    try {
      // Envoi de la requête POST à l'API
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      const data = await response.json();

      if (response.ok) {
        console.log('Commande créée avec succès:', data);

        // Stocker la réponse de la commande dans localStorage
        localStorage.setItem("orderResponse", JSON.stringify(data));
        
        // Rediriger vers la page de paiement
        router.push("/paiement");
      } else {
        console.error('Erreur lors de la création de la commande:', data.error);
        setError(data.error || 'Une erreur est survenue lors de la création de la commande.');
        if (data.details) {
          console.error('Détails de l\'erreur:', data.details);
        }
      }
    } catch (error) {
      console.error('Erreur réseau ou autre:', error.message);
      setError('Une erreur réseau est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false); // Désactiver l'état de chargement
    }
  };

  return (
    <div className="skill__two-tab-details-content mt-5 mb-5">
      <div className="row justify-content-center gy-4">
        <div className="col-xl-7">
          <div className="">
            <h2 className="text-center">{singleData?.titre}</h2>
            <p>{singleData.description}</p>
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
              <li>niveau: <span> {singleData.niveau}</span></li>
              <li>public: <span> {singleData.public}</span></li>
              <li>duree: <span> {singleData.duree}</span></li>
              <li>Prix: <span className="value"> {amount / 100} €</span></li> {/* Affiche le prix dynamique */}
              <li>
                <button onClick={createOrder} className="btn-one" disabled={isLoading}>
                  {isLoading ? 'Traitement...' : 'Acheter'}
                  <i className="fas fa-arrow-right"></i>
                </button>
              </li>
              {error && <li className="text-danger">{error}</li>} {/* Affichage des erreurs */}
            </ul>
            <div className="btn-achat-formation">
              <video
                src="/assets/video/ANIMATION RATING.webm"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className=""
              ></video>
            </div>
          </div>
          <div className="project-info mt-20">
            <div className="project-info-top">
              <h4>Objectifs pedagogiques</h4>
            </div>
            <ul>
              <div>
                <div>
                  {singleData?.objectifs_pedagogiques?.map((objectif, index) => (
                    <li key={index}><span>{objectif}</span></li>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsMain;