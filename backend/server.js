import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter
let transporter;

// Always create transporter with Gmail
transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test email configuration on startup
console.log('Verifying email configuration...');
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
    console.error('Make sure you:');
    console.error('1. Have 2FA enabled on your Gmail account');
    console.error('2. Generated an App Password (not your regular password)');
    console.error('3. Copied the 16-character password with spaces correctly');
  } else {
    console.log('✅ Email server is ready to send emails');
  }
});

// POST endpoint for sending contact form emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log(`📧 Received email request from ${name} (${email})`);

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the LJ Merchant contact form</small></p>
      `,
      replyTo: email
    };

    console.log(`📤 Sending email to: ${mailOptions.to}`);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Email sent successfully! Check your inbox.',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    
    // Provide helpful error messages
    let userMessage = 'Failed to send email. ';
    if (error.message.includes('Invalid login')) {
      userMessage += 'Email credentials are invalid. Please check your app password.';
    } else if (error.message.includes('ECONNREFUSED')) {
      userMessage += 'Could not connect to Gmail servers.';
    } else {
      userMessage += error.message;
    }

    res.status(500).json({ 
      success: false, 
      message: userMessage,
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`Environment: ${NODE_ENV}\n`);
});


