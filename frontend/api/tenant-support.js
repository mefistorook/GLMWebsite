import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, address, message, type } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_AUTH_KEY,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });

  const requestType = type === 'maintenance' ? 'Maintenance Request' : 'General Enquiry';

  try {
    await transporter.sendMail({
      from: process.env.OUTLOOK_EMAIL,
      to: process.env.OUTLOOK_EMAIL,
      replyTo: email,
      subject: `New ${requestType} from ${name}`,
      text: `
New Tenant Support - ${requestType}

Name: ${name}
Email: ${email}
Phone: ${phone}
Property Address: ${address}

Message:
${message}

---
Submitted from goldlinemanagement.com
      `,
      html: `
        <h2>New Tenant Support - ${requestType}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Address:</strong> ${address}</p>
        <h3>Message:</h3>
        <p>${message}</p>
        <hr>
        <p><small>Submitted from goldlinemanagement.com</small></p>
      `
    });

    res.status(200).json({ success: true, message: 'Support request sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
