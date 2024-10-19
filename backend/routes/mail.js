
const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
    service: 'gmail', // You can also use other services like SendGrid, Mailgun, etc.
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password' // Your email password or app password
    }
});

app.post('/send-email', (req, res) => {
    const { candidates, jobTitle, jobDescription } = req.body;

    const mailOptions = {
        from: 'akhileshpujar796@gmail.com',
        to: candidates, // Sends to all candidates
        subject: `Interview Invitation for ${jobTitle}`,
        text: `Hello,

        You have been selected for an interview for the position of ${jobTitle}.

        Job Description:
        ${jobDescription}

        Please let us know your availability.

        Best regards,
         Akhilesh HR`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});