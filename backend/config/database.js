const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB connection successful"))
    .catch((error)=>{
        console.group("Db connection issue");
        console.log(error);
        process.exit(1);
    });
}