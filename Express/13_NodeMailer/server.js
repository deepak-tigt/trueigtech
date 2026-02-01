import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.get("/", async (req, res) => {

  try {
    const mailOptions = {
      form: process.env.EMAIL,
      to: process.env.TO_EMAIL,
      Subject: "sending email using nodemailer",
      text: "hello gmail", 
    };
    console.log(mailOptions)
    await transporter.sendMail(mailOptions);

    res.send("Email sent successfully");
  }
   catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
