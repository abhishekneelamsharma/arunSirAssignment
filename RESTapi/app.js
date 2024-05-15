const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})

const router = require("./router");
app.use(router);

require("./DB/connect");
const PORT = process.env.PORT;





app.listen(PORT,()=>{
    console.log(`running at ${PORT}`);
})