import express from "express"
import {  history, login, logout, myProfile, register,  updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router=express.Router();
router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
router.route("/logout").get(logout);
router.route("/history").get(isAuthenticated,history);
router.route("/myprofile").get(isAuthenticated,myProfile);

export default router;
