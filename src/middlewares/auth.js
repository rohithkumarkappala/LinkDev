const adminAuth = (req,res,next)=>{
    const token = "xyz";
    const isAdmin = token === "xyz";
    console.log("authorization is being checked");
    if(!isAdmin){
        return res.status(401).send("Access Denied");
    }
    next();
}
const userAuth = (req,res,next)=>{
    const token = "xyz";
    const isUser = token === "xyz";
    console.log("authorization is being checked");
    if(!isUser){
        return res.status(401).send("Access Denied");
    }
    next();
}
module.exports = {
    adminAuth,
    userAuth,
};