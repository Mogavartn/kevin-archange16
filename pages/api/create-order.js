import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency, description,  
      firstName, 
      lastName,
      email,
      address,
      city,
      postalCode } = req.body;

    // Vérifie la validité des données
    if (!amount || !currency) {
      console.error('Montant ou devise manquant');
      return res.status(400).json({ error: 'Montant et devise sont nécessaires' });
    }

    const data = JSON.stringify({
      amount,
      currency,
      description,
      firstName,
      lastName,
      email,
      address,
      city,
      postalCode
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
      data
    };
    console.log(data)
    try {
      console.log('Envoi de la requête à Revolut...');
      const response = await axios(config);
      console.log('Réponse de Revolut:', response.data);
      
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/api/sendDataToBrevo`, {
        method: 'POST', // Méthode POST
        headers: {
          'Content-Type': 'application/json', // Indiquer que les données envoyées sont en JSON
        },
        body: JSON.stringify(data), // Convertir les données en chaîne JSON
      });

      res.status(200).json(response.data); // Réponse réussie
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
