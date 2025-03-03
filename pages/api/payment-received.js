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
     // to: [email, "virguenolngot@gmail.com", "trascinelli.c@gmail.com"],  // L'adresse email du destinataire (utilisateur)
      to: email,
      bcc: "virguenolngot@gmail.com",
      subject: `'Bienvenue dans l’aventure, ${name} ! 🚀`,
      text: `<p>Bonjour ${name},</p>
            <p>Nous vous remercions chaleureusement pour votre inscription à la formation <strong>${formation}</strong>. Votre paiement de <strong>${mount}€</strong> a été traité avec succès.</p>
            <p>Un grand merci pour ton inscription à la formation <strong>${formation}</strong> ! 🎯 Ton paiement de <strong>${mount}€</strong> est bien validé, te voilà officiellement avec nous ! ✨</p>
            <p>On est ravis de t’accueillir parmi nos apprenants et de t’aider à booster ton projet. Cette formation, c’est ta clé pour passer au niveau supérieur – profite à fond de l’expérience !</p>
            <p>Une question ou un besoin d’aide ? N’hésite pas à nous contacter, on est là pour t’accompagner.</p>
            <p>Encore merci pour ta confiance, et à très bientôt dans cette belle aventure ! 💪</p>
            <p>Kevin Attallah</p>`,
      html: `<p>Bonjour ${name},</p>
            <p>Nous vous remercions chaleureusement pour votre inscription à la formation <strong>${formation}</strong>. Votre paiement de <strong>${mount}€</strong> a été traité avec succès.</p>
            <p>Un grand merci pour ton inscription à la formation <strong>${formation}</strong> ! 🎯 Ton paiement de <strong>${mount}€</strong> est bien validé, te voilà officiellement avec nous ! ✨</p>
            <p>On est ravis de t’accueillir parmi nos apprenants et de t’aider à booster ton projet. Cette formation, c’est ta clé pour passer au niveau supérieur – profite à fond de l’expérience !</p>
            <p>Une question ou un besoin d’aide ? N’hésite pas à nous contacter, on est là pour t’accompagner.</p>
            <p>Encore merci pour ta confiance, et à très bientôt dans cette belle aventure ! 💪</p>
            <p>Kevin Attallah</p>`,
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