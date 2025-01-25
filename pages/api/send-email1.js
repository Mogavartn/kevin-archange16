export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Your Brevo API key
      const apiKey = 'YOUR_API_KEY';
  
      // The email data
      const emailData = {
        sender: {
          name: "Sender Alex",
          email: "senderalex@example.com",
        },
        to: [
          {
            email: "asathoud16@gmail.com",
            name: "John Doe",
          },
        ],
        subject: "Hello world",
        htmlContent: "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>",
      };
  
      try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Api-Key': process.env.SENDINBLUE_API_KEY,
            'Content-Type': 'application/json',
            'X-Sib-Sandbox': 'drop'
          },
          body: JSON.stringify(emailData),
        });
  
        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`Error sending email: ${response.statusText}`);
        }
  
        const responseData = await response.json();
        res.status(200).json({ message: 'Email sent successfully', data: responseData });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  