const mongoose = require("mongoose");
const URL = process.env.URL;

const connectDB = async()=>{
    try{
        await mongoose.connect(URL);
        console.log("database connected");
    }catch(err){
        console.log(err);
    }
}

connectDB();