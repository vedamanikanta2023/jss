const express = require("express");
const { sendMail } = require("./mail");
const app = express();
app.use(express.json()); // Use built-in middleware for JSON parsing

const notifications = [
  { id: 1, type: "email", message: "Welcome Email" },
  { id: 2, type: "sms", message: "Your OTP is 1234" },
];

app.get("/notifications", (req, res) => res.json(notifications));

app.post("/",(req,res)=>{
  console.log("reqest",req.body);
  res.json(notifications);
})

app.post("/mail",(req,res)=>{
  sendMail();
  res.send("Succussfully Mail send");
})

app.listen(4000, () => console.log("Server running on 4000"));