import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

 export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendRegisterEmail = async (toEmail: string, username: string) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: "Registration Confirmation",
            text: `Hello ${username},\n\nThank you for registering with us. We are excited to have you on board.\n\nBest regards,\nYour Team`,
            html: `
                <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 30px; border-radius: 8px; font-family: Arial, sans-serif; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <div style="text-align: center; background-color: #0d6efd; padding: 20px; border-radius: 8px 8px 0 0; color: #ffffff;">
                        <h1>Welcome to ABC Cargo</h1>
                    </div>
                    <div style="padding: 20px; color: #333333;">
                        <p>Hi <strong>${username}</strong>,</p>
                        <p>Thank you for registering with <strong>ABC Cargo - Logistics & Shipping Solutions</strong>! We're excited to have you onboard.</p>
                        <p>You can now track shipments, manage your bookings, and explore all our logistics services online.</p>
                        <a href="https://your-logistics-app.com/login" style="display: inline-block; margin-top: 20px; padding: 12px 25px; background-color: #0d6efd; color: #ffffff; text-decoration: none; border-radius: 5px;">Login to Your Account</a>
                        <p style="margin-top: 30px;">If you did not create this account, please contact our support team immediately.</p>
                        <p>Best regards,<br>The ABC Cargo Team</p>
                    </div>
                    <div style="font-size: 12px; color: #888888; text-align: center; margin-top: 30px;">
                        © 2025 ABC Cargo. All rights reserved. | contact@abccargo.com
                    </div>
                </div>
            `
        };
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (err) {
        console.error("Email send failed:", err);
    }
};
