const mongoose = require("mongoose")
const DB = process.env.CLOUD_DATABASE
mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/alan").then(()=>{console.log("Connection Successful")}).catch((error)=>{console.log(error)});
mongoose.connect("").then(()=>{console.log("Connection Successful")}).catch((error)=>{console.log(error)});
