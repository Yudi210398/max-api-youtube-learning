import express from "express";
const routerFeed = express.Router();
import * as controller from "../controller/produk.js";

routerFeed.get("/", controller.tryApiGet);
routerFeed.post("/", controller.tryApiPost);
routerFeed.get("/:produkId", controller.produkId);
routerFeed.patch("/:produkId", controller.produkPatch);
routerFeed.delete("/:produkId", controller.produkDelete);

export default routerFeed;
