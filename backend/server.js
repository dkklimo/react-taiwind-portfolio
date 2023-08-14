const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name,email, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail', 'yahoo'
        auth: {
            user: 'dkklimo@gmail.com',
            pass: 'cplsopitvvvjpotq'
        }
    });

    const mailOptions = {
        from: email,
        to: ['dkklimo@gmail.com'],
        subject: subject,
        text:`From: ${name}\nEmail: ${email}\nMessage: ${text}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
