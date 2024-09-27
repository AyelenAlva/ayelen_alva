// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const signUpValidation = [
  body("userId").isNumeric(),
  body("order").isString(),
];

export const signInValidation = [
  body("userId").isNumeric(),
  body("order").isString(),

];
