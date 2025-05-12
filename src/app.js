const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const {User} = require("./models/user");

app.post("/signup",async (req,res)=>{
    const data = {
        firstName:"Sachin",
        lastName:"Tendulkar",
        emailId:"Sachin@Tendulkar.com",
        password:"Sachin@123",
    }
    const user = new User(data);
    try{
        await user.save();
        res.status(201).send("User created successfully");
    }
    catch(err){
        console.error("Error creating user");
        res.status(500).send("Error creating user" + err.message);
    }
})

connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err)=>{
        console.error("Database connection failed", err);
        process.exit(1);
    })
