"use client";

import { useState, useEffect } from "react";
import RevolutCardField from "./paiement-formation";
import image1 from "@/public/assets/img/visamastercard.png";

export default function PaymentPage() {
  const [token, setToken] = useState(null);
  const [orderResponse, setOrderResponse] = useState(null);

  // Récupérer la réponse de la commande depuis localStorage au chargement de la page
  useEffect(() => {
    const storedResponse = localStorage.getItem("orderResponse");
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setOrderResponse(parsedResponse);
      setToken(parsedResponse?.token); // Mettre à jour le token
    }
  }, []);

  // Fonction pour récupérer les données du formulaire
  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const city = document.getElementById("city").value;
    const streetLine1 = document.getElementById("streetLine1").value;
    const postcode = document.getElementById("postcode").value;
  
    if (!name || !email || !countryCode || !city || !streetLine1 || !postcode) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return null; // Retourner null si des champs sont manquants
    }
  
    const formData = {
      name,
      email,
      billingAddress: {
        countryCode,
        region: document.getElementById("region").value, // Optionnel
        city,
        streetLine1,
        postcode,
      },
    };
  
    //console.log("Données du formulaire :", formData); // À des fins de débogage
    return formData; // Retourner les données pour RevolutCardField
  };

  return (
    <div className="section-padding container">
      <div className="d-flex justify-content-between Formulaire_de_paiement">
        <div className="col-6 mr-10">
          <div>
            <form>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="name">Nom complet</label>
                  <input id="name" type="text" placeholder="John Doe" required />
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="countryCode">Code pays</label>
                    <input
                      id="countryCode"
                      type="text"
                      placeholder="Code pays"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city">Ville</label>
                    <input id="city" type="text" placeholder="Paris" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="region">Région</label>
                    <input id="region" type="text" placeholder="Île-de-France" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="streetLine1">Adresse ligne 1</label>
                    <input
                      id="streetLine1"
                      type="text"
                      placeholder="1 Rue de la Paix"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="postcode">Code postal</label>
                    <input id="postcode" type="text" placeholder="75002" required />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 pl-20 align-items-center">
          <div className="project-info mb-5">
            <ul>
              <li>Formation: <span>{orderResponse?.description}</span></li>
              <li>Prix: <span className="value">{orderResponse?.amount} €</span></li>
            </ul>
          </div>
          <div className="row mt-1">
            <div className="col-md-12 mb-1">
              {/* Champ de carte Revolut (uniquement pour le mode de paiement par carte) */}
              <div id="card-field"></div>
            </div>
            <button id="button-submit" type="button" /* onClick={handleSubmit} */>
              Payer
            </button>
            <div className="mt-5">
              <img src={image1?.src} alt="Visa MasterCard" />
            </div>
            {/* Composant RevolutCardField (uniquement pour le mode de paiement par carte) */}
            {/* {token && <RevolutCardField token={token} />} */}
            {token && <RevolutCardField token={token} onSubmit={handleSubmit} />}
          </div>
        </div>
      </div>
    </div>
  );
}