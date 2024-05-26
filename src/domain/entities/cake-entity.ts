import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;
const allowedAllergens: string[] = ["GLUTEN", "HUEVOS", "SOJA", "LACTEOS"];

export interface ICake {
  title: string;
  description: string;
  price: number;
  allergens: string[];
  categories: ObjectId[];
  logoImage: string;
}

const cakeSchema = new Schema<ICake>(
  {
    title: {
      type: String,
      required: true,
      minLength: [3, "Título demasiado corto"],
      maxLength: 50,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minLength: [3, "Descripción demasiado corta"],
      maxLength: 150,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [1, "El precio no puede ser 0"],
      max: 100,
    },
    allergens: [{
      type: String,
      required: false,
      enum: allowedAllergens,
      uppercase: true,
      trim: true,
    }],
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    }],
    logoImage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Cake = mongoose.model<ICake>("Cake", cakeSchema);
