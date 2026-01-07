const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

require("dotenv").config

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser= async (req,res) =>{
    try{
        const {email, password} = req.body;

        // checking user already exists or not
        const user = await userModel.findOne({email});

        
        if(!user){
            return res.json({success:false , message : "User in not available"});
        }

        

        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(password,salt)

        // console.log(hashedPassword, user);
        if(await bcrypt.compare(password,user.password)){
            const token = createToken(user.id)
            const name = user.name;
            res.json({success:true, token, name});
            
        }
        else{
            return res.json({success:false, message:"User Password is wrong"});   
        }

        


        
        
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


// Route for user resgister
const registerUser = async (req,res) =>{

    try{
        const {name, email, password} = req.body;

        // checking user already exists or not 
        const exists = await userModel.findOne({email})

        if(exists){
            return res.json({success:false, message:"User already exits"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false , message:"Please enter a valid email Id"})
        }

        if(password.length < 8){
            return res.json({success:false , message:"Please enter a strong password"})
        }

        //  hashing user password;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user= await newUser.save()

        const token = createToken(user.id)

        res.json({success:true, token, name})


    }
    catch (error){
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
    
}



module.exports = {loginUser, registerUser}