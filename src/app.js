const express = require("express");
const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth");
app.get("/user/userdata",(req,res)=>{
    try{
        throw new Error("User data not found");
    }
    catch(err){
        res.status(500).send(err.message);
    }
})

app.use("/",(err,req,res,next)=>{
    if(err){
        console.log("Error middleware");
        res.status(500).send("Internal Server Error");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});