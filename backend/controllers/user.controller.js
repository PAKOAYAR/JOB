import { User } from "../models/user.model.js";
import { audit } from "../models/audit.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getdatauri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account Created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const date = new Date();
    const ip = req.ip || req.connection.remoteAddress;
    console.log(date, ip);

    const month = date.getMonth();
    console.log(month,date.getHours() + " : " +  date.getMinutes() + " : " + date.getSeconds());
    


    if (!email || !password || !role) {
      return res.status(400).json({
        error: "something missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (user) {
      await audit.create({
        userId: user._id,
        email: user.email,
        date: new Date(),
        ipAddress: ip,
      });
      await user.save();
    }
    if (!user) {
      return res.status(400).json({
        error: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (!isPasswordmatch) {
      return res.status(400).json({
        error: "Incorrect email or password",
        success: false,
      });
    }
    if (isPasswordmatch) {
      // console.log(user._id);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("id", user._id);
      } else {
        console.error("localStorage is not available");
      }
    }
    if (role != user.role) {
      return res.status(400).json({
        error: "Account doesnt exist with current role",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logout Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    const fileuri=getdatauri(file);
    const cloudresponse=await cloudinary.uploader.upload(fileuri.content)

    let skillsarray;
    if (skills) {
      skillsarray = skills.split(",");
    }

    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        error: "user not found",
        success: false,
      });
    }
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsarray;
    if (cloudresponse) {
      user.profile.resume=cloudresponse.secure_url
      user.profile.resumeOriginalName=file.originalname
    }
    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile Updated",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const myProfile = async (req, res) => {
  try {
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        error: "user not found",
        success: false,
      });
    }
    
    
    return res.status(200).json({
      success:true,
      user
    });
  } catch (error) {
    console.log(error);
  }
};
export const history = async (req, res) => {
  const user = req.id;
  console.log(user);

  try {
    const history = await audit.find({ userId: user });
    res.json(history);
  } catch (error) {
    console.log(error);
  }
};
