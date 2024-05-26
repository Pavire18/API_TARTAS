import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema;

export interface ICategory {
  name: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Nombre demasiado corto"],
      maxLength: 20,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
export type CategoryA = ICategory & Document;
