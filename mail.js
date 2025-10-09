import nodemailer from "nodemailer"
import  dotenv  from  "dotenv";

dotenv.config();


export const sendMail = () => {
    // Create a transporter (email service configuration)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vedamanikanta.dali@gmail.com",
        pass:process.env.MAIL_PASS
      },
    });
    
    // Define the email options
    const mailOptions = {
      from: "vedamanikanta.dali@gmail.com",
      to: "manikanta.vedam@gmail.com",
      subject: "Test Email from Node.js",
      html: `<h2>Hello from Node.js!</h2><p>This is a test email.</p>
      <lable>pass for mail is</lable>
      `,
    };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

};
