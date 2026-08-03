import UsersModel from "./model/UsersModel.js";
import { createSecretToken } from "./SecretToken.js";
import bcrypt from "bcrypt";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

export const Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await UsersModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await UsersModel.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    console.log("Signup Token:", token);

    res.cookie("token", token, cookieOptions);

    console.log("Signup Headers:", res.getHeaders());

    return res.status(201).json({
      success: true,
      message: "User signed in successfully",
      user,
    });
  } catch (error) {
    console.error("Signup Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const Login = async (req, res) => {
  try {
    console.log("Login route hit");

    const { email, password } = req.body;
    console.log("Request body:", email);

    const user = await UsersModel.findOne({ email });
    console.log("User:", user);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    console.log("Password match:", auth);

    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);
    console.log("Generated Token:", token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    console.log("Headers:", res.getHeaders());

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });

  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};