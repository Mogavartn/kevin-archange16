import { useState } from 'react';

const PortfolioDetailsMain = ({ singleData }) => {
  const [amount, setAmount] = useState(singleData?.formation?.prix || 0.1 * 100); // Dynamique à partir de singleData
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // Pour gérer le statut de chargement
  const [paymentUrl, setPaymentUrl] = useState(null); // Pour l'URL de paiement
  const [error, setError] = useState(null); // Pour afficher des erreurs
  const [showModal, setShowModal] = useState(false); // Gérer l'affichage du pop-up

  // Informations de l'acheteur
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: 'France', // Ville par défaut
    postalCode: '',
  });

  // Étape de vérification (étape 1 ou 2)
  const [step, setStep] = useState(1); // Étape 1 : Informations sur l'acheteur, Étape 2 : Vérification

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null); // Réinitialise l'erreur avant de faire la requête
    
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount, // Utilise le prix dynamique
          currency, // Devise
          description: singleData?.formation?.nom || 'Formation', // Description dynamique ou valeur par défaut
        }),
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
          <div className="">
            <h2 className="text-center">{singleData?.titre}</h2>
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
              <li>Type: <span> {singleData?.formation?.type}</span></li>
              <li>Durée: <span> {singleData?.formation?.duree}</span></li>
              <li>Prix: <span className="value"> {amount / 100} €</span></li> {/* Affiche le prix dynamique */}
              <li>
              
              <button onClick={handlePayment} disabled={isLoading} className="btn-one">
                  {isLoading ? 'Traitement...' : 'Acheter'}
                  <i className="fas fa-arrow-right"></i>
              </button>
              </li>
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
                              >   
                </video>
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
              <div>
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
    </div>
  );
};

export default PortfolioDetailsMain;
