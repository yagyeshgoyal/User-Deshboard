const mongoose = require("mongoose");

// route handler
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    email:{
        type : String,
        require : true,
        unique: true
    },
    password:{
        type : String,
        require : true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
},{minimize:false});


// export
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = userModel