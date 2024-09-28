import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECURT);
};

// Route for user Login
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;    

    const user = await userModel.findOne({email});    
    
    if(!user){
      return res.status(404).json({message: "User not found"});
    }

    const isMatch = await bcrypt.compare(password, user.password);    

    if(isMatch){
      const token = createToken(user._id);
      res.json({success:true, token})
    }

    else{
      res.status(400).json({message: "Invalid password"});
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });    
  }
};

// Route for user Register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;    

    // Check if user already  exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email & strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "User email Invalid" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter Strong Password",
      });
    }

    // hashing user passowrd
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin Login
const adminLogin = async (req, res) => {
  res.json({ message: "Admin Login Successfull" });
};

export { loginUser, registerUser, adminLogin };
