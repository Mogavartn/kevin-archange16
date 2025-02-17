import axios from 'axios';

export default async function sendDataToBrevo (req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, address, email, city, postalCode } = req.body;

    try {
      // Configuration de l'API Brevo pour ajouter un contact
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts', // URL de l'API Brevo pour ajouter un contact
        {
          email: email, 
          attributes: {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            ADDRESS: address || 'Non précisé',
            EMAIL: email || 'Non précisé',
            VILLE: city || 'Non précisé',
            CODE_POSTALE: postalCode || 'Non précisé',
          },
          listIds: [53],  // Remplacez cela par l'ID de votre liste dans Brevo
          updateEnabled: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'api-key': process.env.SENDINBLUE_API_KEY, // Clé API Brevo stockée dans les variables d'environnement
          },
        }
      );

      // Répondre avec un message de succès
      res.status(200).json({ message: 'Formulaire soumis avec succès', data: response.data });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      // Répondre avec une erreur si l'API échoue
      res.status(500).json({ message: 'Erreur lors de l\'envoi du formulaire', error: error.message });
    }
  } else {
    // Répondre avec un code 405 si la méthode n'est pas POST
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
