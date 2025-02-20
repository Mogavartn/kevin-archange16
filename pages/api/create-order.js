import axios from 'axios';

export default async function handler(req, res) {
  await createWebhook();
  if (req.method === 'POST') {
    const { amount, currency, description } = req.body;

    // Vérifie la validité des données
    if (!amount || !currency) {
      console.error('Montant ou devise manquant');
      return res.status(400).json({ error: 'Montant et devise sont nécessaires' });
    }

    const data = JSON.stringify({
      amount,
      currency,
      description,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://merchant.revolut.com/api/orders',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REVOLUT_API_KEY}`, // La clé API
        'Revolut-Api-Version': '2024-09-01'
      },
      data: data
    };
    console.log(data)
    try {
      console.log('Envoi de la requête à Revolut...');
      const response = await axios(config);
      console.log('Réponse de Revolut:', response.data);
      res.status(200).json(response.data); // Réponse réussie
      await createWebhook();
    } catch (error) {
      // Gestion détaillée des erreurs
      console.error('Erreur de création de commande:', error);

      if (error.response) {
        console.error('Détails de la réponse API Revolut:', error.response.data);
        res.status(500).json({ 
          error: 'Erreur lors de la création de la commande',
          details: error.response.data || error.message 
        });
      } else {
        console.error('Erreur de connexion à Revolut:', error.message);
        res.status(500).json({ 
          error: 'Erreur de connexion à l\'API Revolut',
          details: error.message 
        });
      }
    }
  } else {
    console.error('Méthode non autorisée');
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}

const createWebhook = async () => {
  try {
    const response = await fetch('/api/notify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Vous pouvez passer des données supplémentaires si nécessaire
    });

    const data = await response.json();
    console.log('Webhook created:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
