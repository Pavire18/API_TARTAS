import { Cake, ICake } from "../entities/cake-entity"
import { Document } from "mongoose";

const getAllCakes = async (page: number, limit: number): Promise<any> => {
  return await Cake.find()
    .limit(limit)
    .skip((page - 1) * limit).populate("categories");
};

const getCakeCount = async (): Promise<number> => {
  return await Cake.countDocuments();
};

const getCakeById = async (id: string): Promise<Document<ICake> | null> => {
  return await Cake.findById(id).populate("categories");
};

const getCakeByTitle = async (title: string): Promise<Document<ICake>[]> => {
  return await Cake.find({ title: new RegExp(title, "i") }).populate("categories");
};

const createCake = async (CakeData: any): Promise<Document<ICake>> => {
  const cake = new Cake(CakeData);
  const document: Document<ICake> = (await cake.save()) as any;

  return document;
};

const deleteCake = async (id: string): Promise<Document<ICake> | null> => {
  return await Cake.findByIdAndDelete(id);
};

const updateCake = async (id: string, CakeData: any): Promise<Document<ICake> | null> => {
  return await Cake.findByIdAndUpdate(id, CakeData, { new: true, runValidators: true });
};

export const cakeOdm = {
  getAllCakes,
  getCakeCount,
  getCakeById,
  getCakeByTitle,
  createCake,
  deleteCake,
  updateCake,
};
