require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, phone, email, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // or "outlook", "yahoo", etc.
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.PASSWORD, // App password (not your real password)
        },
    });

    const mailOptions = {
        from: email, // User's email
        to: "your-email@example.com", // 💡 Replace with **your email**
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email.");
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
