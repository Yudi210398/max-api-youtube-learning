import express from "express";
const routerOrder = express.Router();
import * as controller from "../controller/orders.js";

routerOrder.get("/", controller.ordersGet);
routerOrder.post("/", controller.ordersPost);
routerOrder.get("/:orderId", controller.ordersGetId);
routerOrder.delete("/:orderId", controller.ordersDeleteId);
routerOrder.patch("/:orderId", controller.ordersPatchId);

export default routerOrder;
 