import  express  from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from "../models/Users.js";

const router = express.Router()

//REGISTER ENDPOINT
router.post("/register", async(req,res)=>{
    const{username,password} = req.body;

    const user = await UserModel.findOne({username: username})  //to make request
if(user){
    return res.json({message: "User Already Exist"})
}

// const hashedPassword =  await bcrypt.hash(password, 10)
const newUser = new UserModel({username, password})
await newUser.save();
    res.json({message: "User registered successfully"});
});


//LOGIN ENDPOINT
router.post("/login", async(req,res)=>{
    const{username,password} = req.body;
    const user = await UserModel.findOne({username: username}) 
if(!user){
    return res.json({message: "User Does not Exist"})
}
const token = jwt.sign({id: user._id}, "secret");  //to verify if user is authenticate
res.json({token, userId: user._id});
});

export {router as userRouter};

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };