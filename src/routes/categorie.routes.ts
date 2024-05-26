import express from "express";
import { categoryService } from "../domain/services/category.service";

export const categoryRoute = express.Router();

categoryRoute.get("/", categoryService.getAllCategories);
categoryRoute.get("/:id", categoryService.getCategoryById);
categoryRoute.post("/", categoryService.createCategory);
categoryRoute.delete("/:id", categoryService.deleteCategory);
categoryRoute.put("/:id", categoryService.updateCategory);
