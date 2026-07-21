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
        const apiKey = process.env.SENDGRID_API_KEY;
        
        if (!apiKey) {
            context.log.error("SENDGRID_API_KEY environment variable is missing in Azure!");
            context.res = {
                status: 500,
                body: { error: "Server configuration error." }
            };
            return;
        }

        sgMail.setApiKey(apiKey);

        const msg = {
            to: 'majesca.maclan@gmail.com',
            from: 'majesca.maclan@gmail.com',
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
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
        context.log.error('SendGrid Error details:', err.response ? err.response.body : err);
        context.res = {
            status: 500,
            body: { error: "Failed to dispatch email." }
        };
    }
};