const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://rohithdev:GPmQlq6O5lx8KzdY@rohithdev.1a2ccvb.mongodb.net/LinkDev")

}

module.exports = {
    connectDB,
}