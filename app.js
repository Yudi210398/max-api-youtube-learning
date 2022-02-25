import express from "express";
import path from "path";
import routeProduk from "./router/routeProduk.js";
import routeOrder from "./router/routerOrders.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const __dirname = path.resolve();

// ! Cors Handle
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/produks", routeProduk);
app.use("/orders", routeOrder);

app.use((req, res, next) => {
  const error = new Error("Alamat tidak ditemukan");
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});

mongoose
  .connect(
    "mongodb+srv://runatyudi:kawasanrokok1998@cluster0.oaqmd.mongodb.net/restApiMax?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => console.log(`konek`));
  });
