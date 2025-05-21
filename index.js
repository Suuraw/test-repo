import express from "express";
const port=3000;
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello from Express App</h1>")
})
app.listen(port,()=>{
    console.log("The server is running on port 3000");
})