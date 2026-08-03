import env from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import HoldingsModel from "./model/HoldingsModel.js";
import PositionsModel from "./model/PositionsModel.js";
import OrdersModel from "./model/OrdersModel.js"
import { Signup } from "./AuthController.js";
import { Login } from "./AuthController.js";
import { userVerification } from "./Middlewares/AuthMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(
  cors({
    origin: ["http://localhost:5175", "http://localhost:5174"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/addOrder", async (req, res) => {
    let { name, qty, price, Mode } = req.body;
    await OrdersModel.insertOne({
        name: name,
        qty: qty,
        price: price,
        Mode: Mode,
    });
});

app.post("/signup", Signup);
app.post("/login", Login);
app.post("/", userVerification);

app.listen(PORT, () => {
    console.log("App Started!");
    mongoose.connect(url);
    console.log("DB Connected!");
});