"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Temoignage from '../../temoignage/temoignages';

const PortfolioDetailsMain = ({ singleData }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48h en secondes
  const [amount, setAmount] = useState(99); // Montant initial
  const [promoAmount, setpromoAmount] = useState( 69); // Montant initial
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(null); // Gestion des erreurs
  const [selectedPacks, setSelectedPacks] = useState({
    'anglais-debutant-a1-a2': false,
    'anglais-intermediaire-b1-b2': false,
    'anglais-avance-c1-c2': false,
  });

  // Fonction pour gérer les changements de cases à cocher
  const handleCheckboxChange = (id) => {
    setSelectedPacks((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };
      let newAmount = singleData?.formation?.prix || 99; // Montant initial
      let newpromoAmount = singleData?.formation?.prix || 69; // Montant initial
      // Calculer l'ajustement du montant basé sur les packs sélectionnés
    if (newState['anglais-debutant-a1-a2']) {
      newAmount += 99; // Ajouter 130 si 'anglais-debutant-a1-a2' est coché
      newpromoAmount += 30; // Ajouter 130 si 'anglais-debutant-a1-a2' est coché
    }
    if (newState['anglais-intermediaire-b1-b2']) {
      newAmount += 198; // Ajouter 150 si 'anglais-intermediaire-b1-b2' est coché
      newpromoAmount += 70; // Ajouter 150 si 'anglais-intermediaire-b1-b2' est coché
    }

    setAmount(newAmount); // Mettre à jour le montant
    setpromoAmount(newpromoAmount); // Mettre à jour le montant
    return newState;
    });
  };

  // Fonction pour créer une commande
  const createOrder = async () => {
    if (!amount || amount <= 0) {
      setError('Le montant de la commande est invalide.');
      return;
    }
    setIsLoading(true); 
    setError(null); 

    const orderData = {
      amount,
      currency,
      description: singleData.titre,
      selectedPacks,
    };

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Commande créée avec succès:');
        localStorage.setItem("orderResponse", JSON.stringify(data));
        router.push("/paiement");
      } else {
        console.error('Erreur lors de la création de la commande:', data.error);
        setError(data.error || 'Une erreur est survenue lors de la création de la commande.');
      }
    } catch (error) {
      console.error('Erreur réseau ou autre:', error.message);
      setError('Une erreur réseau est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  // Utilisation de useEffect pour démarrer un timer qui décrémente chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0)); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fonction pour formater le temps restant en heures:minutes:secondes
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="skill__two-tab-details-content mt-5 mb-5">
      <div className="row justify-content-center gy-4">
        <div className="col-xl-7">
          <h2 className="text-center">{singleData?.titre}</h2>
          <p className="mb-1 fw-bold fs-5">{singleData.description1}</p>
          <p>{singleData.description}</p>

          <div className="image-formation">
            <img
              className="img__full rounded mt-5"
              src={singleData?.image?.src}
              alt={singleData?.id}
            />
          </div>
        </div>

        <div className="col-xl-5 project-info-left">
          <div className="project-info">
            <div className="project-info-top">
              <h4>
                {['anglais-debutant-a1-a2', 'anglais-intermediaire-b1-b2', 'anglais-avance-c1-c2'].includes(singleData?.id) ? (
                  <span className="text-danger">Offre Spéciale !</span>
                ) : (
                  singleData?.titre
                )}
              </h4>
            </div>
            <ul>
              <li>niveau: <span>{singleData.niveau}</span></li>
              <li>public: <span>{singleData.public}</span></li>
              <li>duree: <span>{singleData.duree}</span></li>
              <li>
                Prix: <span className="value text-muted text-decoration-line-through">{amount} € </span>
                {singleData?.id === 'anglais-debutant-a1-a2' && (
                  <span className="h3 text-success fw-bold">&nbsp;&nbsp;{ promoAmount} €</span>
                )}
              </li>
              <li>
                {singleData?.id === 'anglais-debutant-a1-a2' && (
                  <p className="text-secondary fs-6">
                    Dépêche-toi, offre limitée ! <span className="fs-6 text-danger font-monospace mb-4">⏳ {formatTime(timeLeft)} restantes</span>
                  </p>
                )}
              </li>
              <li className="mt-5">
                {singleData?.id === 'anglais-debutant-a1-a2' && (
                  <div className="table">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th className="text-center">Économisez $10,00 soit 12 % de réduction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['anglais-debutant-a1-a2', 'anglais-intermediaire-b1-b2'].map((id) => (
                          <tr key={id}>
                            <td>
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={selectedPacks[id]}
                                  onChange={() => handleCheckboxChange(id)}
                                />
                                En choisissant le Pack {id.replace('-', ' ')}
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <button onClick={createOrder} className="btn-one" disabled={isLoading}>
                  {isLoading ? 'Traitement...' : 'Acheter Maintenant 🔥'}
                </button>

                {selectedPacks['anglais-intermediaire-b1-b2'] && (
                  <p className="text-primary-emphasis mt-3">
                    Bonus : Inscrivez-vous aujourd'hui et recevez un guide gratuit des 100 phrases essentielles en anglais!
                  </p>
                )}
              </li>

              {error && <li className="text-danger">{error}</li>}
            </ul>

            <div className="btn-achat-formation">
              <Temoignage className="temoignage" />
            </div>
          </div>

          <div className="project-info mt-20">
            <div className="project-info-top">
              <h4>Ce que vous allez maîtriser :</h4>
            </div>
            <ul>
              {singleData?.objectifs_pedagogiques?.map((objectif, index) => (
                <li key={index}><span>{objectif}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsMain;
