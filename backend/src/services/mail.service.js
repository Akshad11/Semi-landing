const transporter = require("../config/mail.config");

exports.sendContactMail = async ({ name, email, message }) => {
    return transporter.sendMail({
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Message - ${name}`,
        html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
    });
};
