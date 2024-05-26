import { Category, ICategory } from "../entities/category-entity"
import { Document } from "mongoose";

const getAllCategories = async (page: number, limit: number): Promise<any> => {
  return await Category.find()
    .limit(limit)
    .skip((page - 1) * limit);
};

const getCategoriesCount = async (): Promise<number> => {
  return await Category.countDocuments();
};

const getCategoryById = async (id: string): Promise<Document<ICategory> | null> => {
  return await Category.findById(id);
};

const createCategory = async (CakeData: any): Promise<Document<ICategory>> => {
  const category = new Category(CakeData);
  const document: Document<ICategory> = (await category.save()) as any;

  return document;
};

const deleteCategory = async (id: string): Promise<Document<ICategory> | null> => {
  return await Category.findByIdAndDelete(id);
};

const updateCategory = async (id: string, CakeData: any): Promise<Document<ICategory> | null> => {
  return await Category.findByIdAndUpdate(id, CakeData, { new: true, runValidators: true });
};

export const categoryOdm = {
  getAllCategories,
  getCategoriesCount,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
};
