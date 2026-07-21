const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { error: "Missing required form fields." }
        };
        return;
    }

    try {
        // Authenticate SendGrid with the secret key stored in Azure
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'her-email@example.com', // <-- Put her real email here
            from: 'your-verified-sendgrid-email@example.com', // <-- Sender email verified in SendGrid
            subject: `New Portfolio Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
            html: `
                <h3>New Portfolio Contact Form Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await sgMail.send(msg);

        context.res = {
            status: 200,
            body: { message: "Email sent successfully!" }
        };
    } catch (err) {
        context.log.error('SendGrid error:', err);
        context.res = {
            status: 500,
            body: { error: "Failed to dispatch email." }
        };
    }
};