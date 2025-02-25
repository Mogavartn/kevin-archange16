"use client"; // Indique que ce composant est côté client

import { useEffect, useRef } from "react";
import RevolutCheckout from "@revolut/checkout";

export default function RevolutCardField({ token, onSubmit }) {
  const instanceRef = useRef(null);

  useEffect(() => {
    // Initialiser le widget Revolut
    RevolutCheckout(token, "prod").then((instance) => {
      instanceRef.current = instance;

      // Créer le champ de carte avec personnalisation
      const card = instance.createCardField({
        target: document.getElementById("card-field"), // Cible le div pour le champ de carte
        styles: {
          default: {
            color: "#000", // Couleur par défaut du texte
            fontSize: "16px", // Taille de la police
          },
          focused: {
            color: "#7222db", // Couleur du texte lorsque le champ est focus
          },
        },
        classes: {
          default: "rc-card-field", // Classe CSS par défaut
          focused: "rc-card-field--focused", // Classe CSS lorsque le champ est focus
        },
        onSuccess() {
          console.log("Paiement réussi !"); // Log pour débogage
          alert("Paiement réussi !");
        },
        onError(message) {
          console.error("Erreur de paiement :", message); // Log pour débogage
          alert(`Erreur de paiement : ${message}`);
        },
      });
      document.getElementById("button-submit").addEventListener("click", function () {
        const formData = onSubmit();
        const formData1 = JSON.parse(formData);
        console.log("Données du formulaire :", formData1);

        // Vérifier que les données sont valides
        /* if (!formData1.name || formData1.email || formData1.countryCode || formData1.city || formData1.postcode || formData1.streetLine1) {
          alert("Veuillez remplir tous les champs obligatoires."+formData1.name );
          return;
        } */
        //card.submit(formData)
        card.submit({
          name: formData1.name,
          email: formData1.email,
          phone: "+33612345678", // Numéro de téléphone formaté en France
          cardholderName: formData1.name,
          billingAddress: {
              countryCode: formData1.countryCode,  // Code pays pour la France
              region: formData1.region,  // Exemple de région en France
              city: formData1.city,  // Exemple de ville en France
              postcode: formData1.postcode,  // Code postal pour Paris
              streetLine1: formData1.streetLine1,  // Exemple d'adresse
              streetLine2: "Bureau 101"  // Ligne d'adresse complémentaire
          },
          shippingAddress: {
              countryCode: formData1.countryCode,  // Code pays pour la France
              region: formData1.region,  // Exemple de région en France
              city: formData1.city,  // Exemple de ville en France
              postcode: formData1.postcode,  // Code postal pour Marseille
              streetLine1: formData1.streetLine1,  // Exemple d'adresse
              streetLine2: "Bureau 101"  // Ligne d'adresse complémentaire
          }
      });
      })
    
     /*  document.getElementById("button-submit").addEventListener("click", function () {
        card.submit(email)
      }) */
      
      // Gérer la soumission du formulaire
      /* document.getElementById("button-submit").addEventListener("click", () => {
        // Appeler la fonction onSubmit pour récupérer les données du formulaire
        const formData = onSubmit();
        card.submit("");
        const formData1 = JSON.stringify(formData);
        console.log("les donnéé:"+JSON.parse(formData1))
        if (formData) {
          card.submit(email= "example.customer@example.com");
        } else {
          alert("Veuillez remplir tous les champs du formulaire.");
        }
      }); */
    });

    // Nettoyer l'instance lors du démontage du composant
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, [token, onSubmit]);

  return null; // Le widget est géré par Revolut, donc aucun rendu JSX n'est nécessaire
}