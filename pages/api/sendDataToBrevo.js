import axios from 'axios';

export default async function handler(req, res) {
  // Vérifier que la méthode est POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée, POST attendu' });
  }

  // Récupérer les données envoyées par la requête
  const { event, order_id, amount, currency, customer, status } = req.body;
  const { email, first_name: firstName, last_name: lastName } = customer;

  // Vérification des données nécessaires
  if (!email || !firstName || !lastName || !amount || !currency || !status) {
    return res.status(400).json({ error: 'Données manquantes, email, prénom, nom, montant, devise et statut sont nécessaires.' });
  }

  try {
    // Préparer les données du contact à envoyer à Brevo
    const contactData = {
      email,
      firstName,
      lastName,
      attributes: {
        EMAIL: email,
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        BUDGET_ESTIME: amount, // Montant de la transaction
        CURRENCY: currency,    // Devise de la transaction
        STATUS: status,        // Statut de la transaction
        ORDER_ID: order_id,    // ID de la commande
        EVENT: event,          // Événement (ex: ORDER_COMPLETED)
      },
      listIds: [53],           // Remplace par ton propre ID de liste dans Brevo
      updateEnabled: true,     // Permet la mise à jour des contacts existants
    };

    // Envoi de la requête à l'API Brevo pour ajouter un contact
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      contactData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY, // Clé API dans les variables d'environnement
        },
      }
    );

    // Log de la réponse de Brevo
    console.log('Réponse de Brevo:', response.data);

    // Répondre avec succès
    return res.status(200).json({
      message: 'Contact ajouté ou mis à jour avec succès dans Brevo',
      data: response.data,
    });
  } catch (error) {
    // Gestion détaillée des erreurs
    console.error('Erreur lors de l\'envoi des données à Brevo:', error);

    // Vérification si une réponse d'erreur de l'API Brevo existe
    const errorMessage = error.response ? error.response.data : error.message;

    return res.status(500).json({
      message: 'Erreur lors de l\'envoi des données à Brevo',
      error: errorMessage,
    });
  }
}