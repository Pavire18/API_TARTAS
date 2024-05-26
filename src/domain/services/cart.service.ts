import { type NextFunction, type Request, type Response } from "express";
import { cartOdm } from "../odm/cart.odm";

const createCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdCart = await cartOdm.createCart(req.body);
    res.status(201).json(createdCart);
  } catch (error) {
    next(error);
  }
};

export const cartService = {
  createCart,
};
