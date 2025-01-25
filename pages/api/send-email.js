// /pages/api/submitForm.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { first_name, last_name, company, email, subject, message } = req.body;
  
      const emailData = {
        sender: {
          name: `${first_name} ${last_name}`, // Ton nom
          email: 'senderalex@example.com' // Ton email
        },
        to: [
          {
            email: 'asathoud16@gmail.com', // L'adresse à laquelle envoyer l'email
            name: 'Jak Formation', // Nom du destinataire
          },
        ],
        subject: subject || 'Nouveau message depuis le formulaire',
        htmlContent: `
          <html>
            <body>
              <p><strong>Nom :</strong> ${first_name} ${last_name}</p>
              <p><strong>Société :</strong> ${company || 'Non spécifiée'}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Message :</strong><br/>${message}</p>
            </body>
          </html>
        `,
      };
  
      try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Api-Key': process.env.SENDINBLUE_API_KEY, // La clé API est dans une variable d'environnement
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi de l\'email');
        }
  
        const result = await response.json();
        console.log('API Response:', result);
        return res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: `Erreur : ${error.message}` });
      }
    } else {
      res.status(405).json({ success: false, message: 'Méthode non autorisée' });
    }
  }
  