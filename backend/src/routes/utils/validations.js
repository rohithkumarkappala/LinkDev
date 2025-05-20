const validator = require("validator");
const  bcrypt = require("bcrypt");

const validateSignUpData = (req) =>{

    const {firstName, lastName, email, password} = req.body;
    if (firstName === "" || lastName === "") {
        throw new Error("Name is not valid");
    }
    
    else if(!validator.isEmail(email)){
        throw new Error("Enter the correct email");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter strong password");
    }
    return { firstName, lastName, email, password };
};

const validateEditprofile = (req) =>{

    const allowedFields = ["firstName","lastName","skills","age","gender","about","photoUrl"];
    const isEditAllowed = Object.keys(req.body).every(field => allowedFields.includes(field));
    if (!isEditAllowed) {
        throw new Error("Invalid fields in profile update");
    }
    return req.body;
};


module.exports = { validateSignUpData, validateEditprofile};