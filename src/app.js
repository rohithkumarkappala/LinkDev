const express = require("express");
const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth");
app.use("/admin",adminAuth);

app.get("/admin/data",(req,res)=>{
    res.send("Hello from /admin/data");
});

app.post("/admin/data",(req,res)=>{
    res.send("Hello from /admin/data");
});

app.post("/user",userAuth,(req,res)=>{
    res.send("Data Successfully stored in DataBase")
});

app.delete("/user",(req,res)=>{
    res.send("Data Successfully deleted from DataBase")
});

app.use("/test", (req,res)=>{
    res.send("Hello from /hello");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});