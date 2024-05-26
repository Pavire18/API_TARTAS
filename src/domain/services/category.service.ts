import { type NextFunction, type Request, type Response } from "express";
import { categoryOdm } from "../odm/category.odm";

const getAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Asi leemos query params
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const Categorys = await categoryOdm.getAllCategories(page, limit);
    // Num total de elementos
    const totalElements = await categoryOdm.getCategoriesCount();

    const response = {
      pagination: {
        totalItems: totalElements,
        totalPages: Math.ceil(totalElements / limit),
        currentPage: page,
      },
      data: Categorys,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const Category = await categoryOdm.getCategoryById(id);
    if (Category) {
      res.json(Category);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdCategory = await categoryOdm.createCategory(req.body);
    res.status(201).json(createdCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const CategoryDeleted = await categoryOdm.deleteCategory(id);
    if (CategoryDeleted) {
      res.json(CategoryDeleted);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const CategoryUpdated = await categoryOdm.updateCategory(id, req.body);
    if (CategoryUpdated) {
      res.json(CategoryUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

export const categoryService = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
};
