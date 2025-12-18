const { sendContactMail } = require("../services/mail.service");

exports.sendContact = async (req, res, next) => {
    try {
        await sendContactMail(req.body);

        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        next(error);
    }
};
