import nodemailer from 'nodemailer';

// Créez un transporteur SMTP pour Gmail (ou un autre service)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,  // Votre adresse email Gmail
    pass: process.env.SMTP_SERVER_PASSWORD,  // Votre mot de passe d'application Gmail
  },
});

export default async function handler(req, res) {
  // Vérifiez que la méthode est POST
  if (req.method === 'POST') {
    //const { name, email, amount } = req.body;

    const { name, email, mount, formation, phone, cardholderName, billingAddress } = JSON.parse(req.body);

    // Vérifiez que les informations sont présentes dans le corps de la requête
    if (!name || !email || !mount || !formation) {
      return res.status(400).json({ error: 'Les informations requises (name, email, amount) sont manquantes.' });
    }

    // Créez l'email de remerciement
    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME,  // L'adresse email d'envoi
      to: [email, "virguenolngot@gmail.com"],  // L'adresse email du destinataire (utilisateur)
      subject: 'Merci pour votre paiement !',
      text: `<p>Bonjour ${name},</p>
            <p>Nous vous remercions chaleureusement pour votre inscription à la formation <strong>${formation}</strong>. Votre paiement de <strong>${mount}€</strong> a été traité avec succès.</p>
            <p>Nous sommes ravis de vous compter parmi nos apprenants et nous vous souhaitons une expérience enrichissante. N'hésitez pas à nous contacter si vous avez des questions ou besoin d'assistance pendant votre parcours.</p>
            <p>Encore merci pour votre confiance, et à très bientôt dans votre formation !</p>
            <p>Cordialement,<br>L'équipe Jak Formation</p>`,
      html: `<p>Bonjour ${name},</p>
            <p>Nous vous remercions chaleureusement pour votre inscription à la formation <strong>${formation}</strong>. Votre paiement de <strong>${mount}€</strong> a été traité avec succès.</p>
            <p>Nous sommes ravis de vous compter parmi nos apprenants et nous vous souhaitons une expérience enrichissante. N'hésitez pas à nous contacter si vous avez des questions ou besoin d'assistance pendant votre parcours.</p>
            <p>Encore merci pour votre confiance, et à très bientôt dans votre formation !</p>
            <p>Cordialement,<br>L'équipe Jak Formation</p>`,
    };

    try {
      // Envoi de l'email
      await transporter.sendMail(mailOptions);

      // Réponse de succès
      return res.status(200).json({ message: 'E-mail de remerciement envoyé avec succès.' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email de remerciement.' });
    }
  } else {
    // Si la méthode n'est pas POST, renvoyer une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}


/* // pages/api/paymentReceived.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
 
  if (req.method === 'POST') {
    //const { name, email, amount } = req.body;  // Données envoyées par le frontend

    // Extraire les données envoyées par la requête
    const { name, email, mount, formation, phone, cardholderName, billingAddress } = req.body;
    //const { countryCode, region, city, postcode, streetLine1, streetLine2 } = billingAddress;
    
    console.log("Données reçues:", req.body);
    // Créez un transporteur SMTP pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_SERVER_USERNAME, // Votre adresse Gmail
        pass: process.env.SMTP_SERVER_PASSWORD, // Votre mot de passe Gmail ou le mot de passe d'application
      },
    });
    console.log("mail:", email);
    console.log("nom:", name);
    console.log("prix:", mount);
    // Configurez l'email de confirmation
    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME, // Votre adresse e-mail (expéditeur)
      to: email,  // L'adresse e-mail de l'utilisateur qui a effectué le paiement
      subject: `Confirmation de paiement reçu`,
      text: `Bonjour ${name},\n\nNous vous confirmons que votre paiement de ${mount} a bien été reçu. Merci pour votre achat !\n\nSi vous avez des questions, n'hésitez pas à nous contacter.\n\nCordialement,\nL'équipe de votre site.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail de confirmation envoyé avec succès' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
 */