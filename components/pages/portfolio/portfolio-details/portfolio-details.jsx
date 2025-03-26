"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Temoignage from '../../temoignage/temoignages';

const PortfolioDetailsMain = ({ singleData }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48h en secondes
  const [normalAmount, setNormalAmount] = useState(99); // Montant initial
  const [promoAmount, setPromoAmount] = useState(69); // Montant initial
  const [percentage, setPercentage] = useState(30); // Pourcentage de remise
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(null); // Gestion des erreurs
  const [selectedPacks, setSelectedPacks] = useState({
    'anglais-debutant + intermediaire': false,
    'anglais-intermediaire + Avancé': false,
    'anglais-debutant, intermediaire + Avancé': false,
  });

  // Fonction pour gérer les changements de cases à cocher
  const handleCheckboxChange = (id) => {
    setSelectedPacks((prevState) => {
      const newState = { ...prevState };

      if (id === 'anglais-debutant + intermediaire' && !newState[id]) {
        newState['anglais-debutant, intermediaire + Avancé'] = false;
      } else if (id === 'anglais-debutant, intermediaire + Avancé' && !newState[id]) {
        newState['anglais-debutant + intermediaire'] = false;
      }

      newState[id] = !newState[id]; // Inverser l'état de la case actuellement cliquée

      let newNormalAmount = singleData?.formation?.prix || 99; // Montant initial
      let newPromoAmount = singleData?.formation?.prix || 69; // Montant initial
      let newPercentage = 30; // Pourcentage initial

      // Calculer les ajustements des montants en fonction des packs sélectionnés
      if (newState['anglais-debutant + intermediaire']) {
        newNormalAmount += 99;
        newPromoAmount += 30;
        newPercentage = 50;
      }

      if (newState['anglais-intermediaire + Avancé']) {
        newNormalAmount += 99;
        newPromoAmount += 30;
        newPercentage = 50;
      }

      if (newState['anglais-debutant, intermediaire + Avancé']) {
        newNormalAmount += 198;
        newPromoAmount += 70;
        newPercentage = 53;
      }

      setNormalAmount(newNormalAmount); // Mettre à jour le montant normal
      setPromoAmount(newPromoAmount); // Mettre à jour le montant promo
      setPercentage(newPercentage); // Mettre à jour le pourcentage

      return newState;
    });
  };

  // Fonction pour créer une commande
  const createOrder = async () => {
    const finalAmount = promoAmount < normalAmount ? promoAmount : normalAmount; // Choisir le prix promo ou normal
    if (finalAmount <= 0) {
      setError('Le montant de la commande est invalide.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const orderData = {
      amount: finalAmount, // Utiliser le montant final
      currency,
      description: singleData.titre,
    };

    console.log(JSON.stringify(orderData));

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
        console.log('Commande créée avec succès');
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
            <div className="project-info-top-content">
              <div className="d-flex justify-content-around">
                <div className="project-info-top-content-liste">
                  <ul className="liste">
                    <li>niveau: <span>{singleData.niveau}</span></li>
                    <li>public: <span>{singleData.public}</span></li>
                    <li>duree: <span>{singleData.duree}</span></li>
                    <li>
                      Prix: <span className="value text-muted text-decoration-line-through">{normalAmount} € </span>
                        <span className="h3 text-success fw-bold">&nbsp;&nbsp;{promoAmount} €</span>
                    </li>
                    <li>
                      <p className="text-secondary fs-6">
                        Dépêche-toi, offre limitée ! <span className="fs-6 text-danger font-monospace mb-4">⏳ {formatTime(timeLeft)} restantes</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div className="btn-achat-formation">
                    <Temoignage className="" />
                  </div>
                </div>
              </div>

              {/* Affichage des packs selon les formations */}
              {singleData?.id === 'anglais-debutant-a1-a2' && (
                <div className="table">
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th className="text-center">
                          Payez moins avec nos Packs Exclusifs ! <br />
                          <span className="text-danger fw-bold">{percentage}% de remise</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {['anglais-debutant + intermediaire', 'anglais-debutant, intermediaire + Avancé'].map((id) => (
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

              {singleData?.id === 'anglais-intermediaire-b1-b2' && (
                <div className="table">
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th className="text-center">
                          Payez moins avec nos Packs Exclusifs ! <br />
                          <span className="text-danger fw-bold">{percentage}% de remise</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {['anglais-intermediaire + Avancé'].map((id) => (
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

              <div className="d-flex justify-content-center">
                <button onClick={createOrder} className="btn-one" disabled={isLoading}>
                  {isLoading ? 'Traitement...' : 'Acheter Maintenant 🔥'}
                </button>
              </div>

              {selectedPacks['anglais-debutant, intermediaire + Avancé'] && (
                <p className="text-primary-emphasis mb-3 mt-2">
                  Bonus : Inscrivez-vous aujourd'hui et recevez un guide gratuit des 100 phrases essentielles en anglais!
                </p>
              )}
              {error && <li className="text-danger">{error}</li>}
            </div>
          </div>

          <div className="project-info mt-20">
            <div className="project-info-top">
              <h4>Ce que vous allez maîtriser :</h4>
            </div>
            <ul className="p-5">
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
