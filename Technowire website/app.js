const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact-us.html');
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",  // Replace with your SMTP host
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-password' // Replace with your email password or app password
        }
    });

    // Setup email data
    let mailOptions = {
        from: '"Contact Form" <your-email@gmail.com>',
        to: 'support@technowire.in',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error: Could not send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});