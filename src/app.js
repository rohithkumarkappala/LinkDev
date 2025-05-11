const express = require("express");
const app = express();

app.get("/user",(req,res,next)=>{
    console.log("Response 1!!")
    res.send("Hello from GET API call")
    next();
    
},(req,res,next)=>{
    console.log("Response 2!!")
    // res.send("Hello from GET API call")
    next();
},(req,res,next)=>{
    console.log("Response 3!!")
    // res.send("Hello from GET API call")
    next();
},(req,res,next)=>{
    console.log("Response 4!!")
    // res.send("Hello from GET API call")
    next();
},(req,res,next)=>{
    console.log("Response 5!!")
    // res.send("Hello from GET API call")
    next();
}
);

app.post("/user",(req,res)=>{
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