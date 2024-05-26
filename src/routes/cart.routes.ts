import express from "express";
import { cartService } from "../domain/services/cart.service";

export const cartRoute = express.Router();

cartRoute.post("/", cartService.createCart);
