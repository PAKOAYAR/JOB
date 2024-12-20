import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      require: true,
    },
 
    loginLogs: {
      type: [
        {
          date: { type: Date, default: Date.now },
          ipAddress: { type: String },
        },
      ],
      default: [], // This initializes the array as empty by default
    },
   
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
