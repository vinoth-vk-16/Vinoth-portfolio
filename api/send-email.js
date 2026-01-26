import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;
  const name = `${firstName} ${lastName}`.trim();

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use this for testing
      to: 'imvinothvk521@gmail.com', // Your email
      replyTo: email, // So you can reply directly to the sender
      subject: subject || `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
