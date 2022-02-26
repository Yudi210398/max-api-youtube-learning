import express from "express";
const routerFeed = express.Router();
import * as controller from "../controller/produk.js";
import { body } from "express-validator";
let validasi = async function () {
  try {
    return await [
      body("namaProduk", "input tidak berkenan").trim().isLength({ min: 5 }),
      body("harga", `Masukan Angka`).trim().isNumeric(),
    ];
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

routerFeed.get("/", controller.tryApiGet);
routerFeed.post("/", await validasi(), controller.tryApiPost);
routerFeed.get("/:produkId", controller.produkId);
routerFeed.patch("/:produkId", await validasi(), controller.produkPatch);
routerFeed.delete("/:produkId", controller.produkDelete);

export default routerFeed;
