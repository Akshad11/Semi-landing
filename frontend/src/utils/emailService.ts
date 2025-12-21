// src/utils/emailService.ts
import emailjs from "emailjs-com";

interface SendEmailParams {
    templateId?: string;
    data: Record<string, any>;
    subject?: string;
}

export const sendEmail = async ({
    templateId,
    data,
    subject,
}: SendEmailParams) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const finalTemplateId =
        templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !finalTemplateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing");
    }

    return emailjs.send(
        serviceId,
        finalTemplateId,
        {
            ...data,
            subject,
        },
        publicKey
    );
};
