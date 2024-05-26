import mongoose, { ObjectId } from "mongoose";
import { IUser } from "./user-entity";
const Schema = mongoose.Schema;

interface ICartProduct {
  cake: ObjectId;
  quantity: number;
}

export interface ICart {
  products: ICartProduct[];
  user: IUser;
}

const cartSchema = new Schema<ICart>(
  {
    products: [{
      type: {
        cake: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cake",
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
      required: false,
    }],
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model<ICart>("Cart", cartSchema);
