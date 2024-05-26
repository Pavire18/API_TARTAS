import { Document } from "mongoose";
import { Cart, ICart } from "../entities/cart-entity";

const createCart = async (CartData: any): Promise<Document<ICart>> => {
  const cart = new Cart(CartData);
  const document: Document<ICart> = (await cart.save()) as any;

  return document;
};
export const cartOdm = {
  createCart,
};
