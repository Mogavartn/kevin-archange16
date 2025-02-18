import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { description, firstName, lastName, address, email, city, postalCode } = req.body;

    try {
      // Envoi de la requête à l'API Brevo pour ajouter un contact
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email: email,
          attributes: {
            JOB_TITLE: description,
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            ADDRESS: address || 'Non précisé',
            EMAIL: email || 'Non précisé',
            VILLE: city || 'Non précisé',
            CODE_POSTALE: postalCode || 'Non précisé',
          },
          listIds: [53],  // Remplace avec ton propre ID de liste
          updateEnabled: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-key': process.env.SENDINBLUE_API_KEY, // Clé API dans les variables d'environnement
          },
        }
      );

      console.log('Réponse de Brevo:', response.data); // Afficher la réponse complète
      // Répondre avec succès
      res.status(200).json({ message: 'Formulaire soumis avec succès', data: response.data });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error.response?.data || error.message);
      res.status(500).json({ message: 'Erreur lors de l\'envoi du formulaire', error: error.response?.data || error.message });
    }
  } else {
    // Répondre avec code 405 si la méthode n'est pas POST
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
