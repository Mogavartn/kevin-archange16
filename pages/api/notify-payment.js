export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        console.log('Données reçues du webhook:', req.body);
  
        // Extraction des données selon le format de Revolut
        const { event, order_id, amount, currency, customer, status } = req.body;
        const { email, first_name: firstName, last_name: lastName } = customer;
  
        // Vérifie si toutes les informations nécessaires sont présentes
        if (!email || !amount || !currency || !status) {
          return res.status(400).json({ error: 'Données manquantes dans le webhook de Revolut.' });
        }
  
        // Traitement des données (exemple : enregistrement en base de données, envoi d'un email, etc.)
        console.log('Données valides reçues:', { email, firstName, lastName, amount, currency, status });
  
        // Réponse réussie
        res.status(200).json({ message: 'Webhook traité avec succès' });
      } catch (error) {
        console.error('Erreur lors du traitement du webhook:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors du traitement.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }