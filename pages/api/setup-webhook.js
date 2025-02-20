import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Données à envoyer à l'API Revolut
    const data = JSON.stringify({
      url: 'https://www.kevin-attallah.com/api/notify-payment', // URL de production
      events: [
        'ORDER_COMPLETED',
        'ORDER_AUTHORISED',
      ],
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://merchant.revolut.com/api/1.0/webhooks',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REVOLUT_API_KEY}`,
      },
      data: data,
    };

    try {
      const response = await axios(config);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Erreur lors de la configuration du webhook:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}