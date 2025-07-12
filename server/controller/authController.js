const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../models/auth")


exports.register = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const saltRounts = 10;
        const hashPassword = await bcrypt.hash(password,saltRounts);

        const newUser = new User({
            email,
            password:hashPassword
        })
        await newUser.save();
        res.status(200).json({message:"User registered successfully"});

    } catch{
        res.status(400).json({message:"Error registering user"});
    }

}
exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const user = await User.findOne({email:email });
        if(user){
            const isMatch = await bcrypt.compare(password,user.password);

            if(isMatch){
                const token = jwt.sign({id:user._id,email:user.email,username:user.name},process.env.JWT_SECRET,{expiresIn:"1h"});
                res.status(200).json({token:token,message:"User signed in successfully"});
            } else{
                res.status(400).json({message:"Invalid Credentials"});
                
            }

        } else{
            res.status(404).json("User Not Found")

        }

    } catch{
        res.status(400).json({message:"Error signing in user"});
    }
}
