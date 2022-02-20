import express from "express";
import path from "path";
import routeProduk from "./router/routeProduk.js";
import routeOrder from "./router/routerOrders.js";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(morgan("dev"));
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

app.listen(port);
