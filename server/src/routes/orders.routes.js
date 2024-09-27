import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl, applyValidations);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", createOrderCtrl,applyValidations );

export { ordersRouter };
