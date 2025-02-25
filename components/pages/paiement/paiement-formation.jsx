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
          alert("Paiement réussi !");
        },
        onError(message) {
          alert(`Erreur de paiement : ${message}`);
        },
      });
    
     /*  document.getElementById("button-submit").addEventListener("click", function () {
        card.submit(email)
      }) */
      
      // Gérer la soumission du formulaire
      document.getElementById("button-submit").addEventListener("click", () => {
        // Appeler la fonction onSubmit pour récupérer les données du formulaire
        const formData = onSubmit();
        const formData1 = JSON.stringify(formData);
        console.log("les donnéé:"+JSON.parse(formData1))
        if (formData) {
          card.submit(JSON.parse(formData1));
        } else {
          alert("Veuillez remplir tous les champs du formulaire.");
        }
      });
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