import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akshay.keerth.kadali@gmail.com',
                pass: 'berwektavplpuxbr',
            },
        });

        const mailOptions = {
            from: email,
            to: 'akshay.keerth.kadali@gmail.com',
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error); // Add this line for more detailed error logging
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}