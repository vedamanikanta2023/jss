const express = require("express");

const app = express();
app.use(express.json());

app.get("/app",(req,res)=>{
    console.log("received requst")
    res.json({name:"express",version:"0.2.2"});
})

app.post("/user",(req,res)=>{
    const reqBody = req.body;
    console.log("reqBody",reqBody);
    res.send("possted data successfull");
})

app.listen(6000,()=>console.log("server running at 60000"));