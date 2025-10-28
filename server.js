// server.js (Node.js/Express Backend)

// Load environment variables from .env file
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000; // The backend will run on port 5000

// Middlewares
app.use(cors({ 
    origin: 'http://localhost:5173' // ONLY allow requests from the React app running on port 3000
})); 
app.use(express.json()); // To parse JSON data coming from the React form

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Define the API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message, phone } = req.body; // phone alanını da ekledik

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `[React Form] New Message from ${name} (${email})`,
            html: `
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p> 
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        
        console.log(`Email sent successfully to ${process.env.EMAIL_TO}`);
        
        // Send success response back to the React client
        res.status(200).json({ message: 'Email sent successfully!', success: true });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ message: 'Internal Server Error: Failed to send email.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});