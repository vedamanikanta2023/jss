const express = require("express");

const app = express();

app.use(express.json());

app.get("", (req, res) => {
  return res.send("<h1>Hello World!<br/>Welcome to vedam server</h1>");
});

app.post("/userdetails",(req,res)=>{
    const details = req.body;
    console.log(details);
    res.status(200).json({message:"recevied user details"});
})

app.listen(4000, () => console.log("app running at 4000"));
