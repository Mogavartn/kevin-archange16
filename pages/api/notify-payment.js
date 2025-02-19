import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Réception des données du webhook de Revolut (transaction)
      const { email, firstName, lastName, amount, currency, status } = req.body;

      // Vérifie si toutes les informations nécessaires sont présentes
      if (!email || !amount || !currency || !status) {
        return res.status(400).json({ error: 'Données manquantes dans le webhook de Revolut.' });
      }

      // Envoi de l'abonnement aux événements via l'API Revolut pour activer les webhooks
      const data = {
        url: 'https://www.kevin-attallah.com', // URL du webhook pour recevoir les événements
        events: ['TransactionCreated', 'PayoutLinkCreated'],
      };

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://b2b.revolut.com/api/2.0/webhooks',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.REVOLUT_API_KEY}`, // La clé API
        },
        data: JSON.stringify(data),
      };

      // Effectuer l'appel API Revolut
      const response = await axios(config);

      // Log des informations de réponse de Revolut
      console.log('Réponse de Revolut:', response.data);

      // Préparer les données à envoyer à Brevo (Sendinblue)
      const contactData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        attributes: {
          amount: amount,
          currency: currency,
          status: status,  // Statut de la transaction
        },
      };

      // Appel à votre API pour envoyer les données à Brevo
      const brevoResponse = await fetch('/api/sendDataToBrevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),  // Passer contactData dans le corps de la requête
      });

      const brevoData = await brevoResponse.json();

      if (!brevoResponse.ok) {
        throw new Error(brevoData.error || 'Erreur lors de l\'envoi des données à Brevo');
      }

      console.log('Données envoyées à Brevo avec succès', brevoData);

      // Réponse réussie
      res.status(200).json({ message: 'Données envoyées avec succès', brevoData });
    } catch (error) {
      console.error('Erreur:', error);

      // Gérer l'erreur générale
      res.status(500).json({ error: 'Une erreur est survenue lors du traitement.' });
    }
  } else {
    // Si la méthode n'est pas POST, renvoyer une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
