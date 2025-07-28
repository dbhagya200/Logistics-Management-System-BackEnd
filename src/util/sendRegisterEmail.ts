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
               <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 30px; border-radius: 8px; font-family: 'Segoe UI', sans-serif; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);">
  <div style="text-align: center; background-color: #2c9097; padding: 25px; border-radius: 8px 8px 0 0; color: #ffffff;">
    <h1 style="margin: 0; font-size: 26px;">Welcome to E‑Shift Logistics</h1>
    <p style="margin-top: 5px; font-size: 14px;">Smart. Seamless. Swift.</p>
  </div>

  <div style="padding: 25px; color: #333333;">
    <p>Hi <strong>${username}</strong>,</p>

    <p>Thank you for joining <strong>E‑Shift Logistics</strong> — your digital partner in smart transport solutions. We're thrilled to have you onboard!</p>

    <p>With your new account, you can now:</p>
    <ul style="padding-left: 20px; margin: 10px 0;">
      <li>Track & manage transport jobs in real time</li>
      <li>Assign vehicles and monitor loads efficiently</li>
      <li>Access powerful logistics tools, reports & dashboards</li>
    </ul>

    <a href="https://your-eshift-platform.com/login" style="display: inline-block; margin-top: 25px; padding: 12px 30px; background-color: #147380; color: #ffffff; text-decoration: none; font-weight: 500; border-radius: 6px;">Login to Your Dashboard</a>

    <p style="margin-top: 30px;">If you did not register this account, please contact our support team immediately at <a href="mailto:support@eshiftlogistics.com">support@eshiftlogistics.com</a>.</p>

    <p>Welcome again, and get ready to streamline your logistics journey with E‑Shift!</p>

    <p>Best regards,<br><strong>The E‑Shift Logistics Team</strong></p>
  </div>

  <div style="font-size: 12px; color: #888888; text-align: center; margin-top: 30px;">
    © 2025 E‑Shift Logistics. All rights reserved. | <a href="mailto:contact@eshiftlogistics.com" style="color: #888888;">contact@eshiftlogistics.com</a>
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
