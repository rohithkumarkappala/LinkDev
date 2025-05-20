require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/config/database");
const  cookieParser = require("cookie-parser");
const cors = require('cors');
const http = require("http");



const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);
app.use(express.json());
app.use(cookieParser());


const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const requestRouter = require("./src/routes/request");
const userRouter = require("./src/routes/users");
const initilizeSocket = require("./src/routes/utils/socket");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

const server = http.createServer(app);
initilizeSocket(server);

connectDb() 
    .then(() =>{
        console.log("Database Connected");
        server.listen(process.env.PORT, () => {
            console.log("Server started on port 3000.....");
        });
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });

    
