import { type NextFunction, type Request, type Response } from "express";
import { cakeOdm } from "../odm/cake.odm";

const getAllCakes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Asi leemos query params
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const cakes = await cakeOdm.getAllCakes(page, limit);
    // Num total de elementos
    const totalElements = await cakeOdm.getCakeCount();

    const response = {
      pagination: {
        totalItems: totalElements,
        totalPages: Math.ceil(totalElements / limit),
        currentPage: page,
      },
      data: cakes,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getCakeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const cake = await cakeOdm.getCakeById(id);
    if (cake) {
      res.json(cake);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

const getCakeByTitle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const cakeTitle = req.params.name;

  try {
    const cake = await cakeOdm.getCakeByTitle(cakeTitle);
    if (cake?.length) {
      res.json(cake);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    next(error);
  }
};

const createCake = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdCake = await cakeOdm.createCake(req.body);
    res.status(201).json(createdCake);
  } catch (error) {
    next(error);
  }
};

const deleteCake = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const cakeDeleted = await cakeOdm.deleteCake(id);
    if (cakeDeleted) {
      res.json(cakeDeleted);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

const updateCake = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const cakeUpdated = await cakeOdm.updateCake(id, req.body);
    if (cakeUpdated) {
      res.json(cakeUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

export const cakeService = {
  getAllCakes,
  getCakeById,
  getCakeByTitle,
  createCake,
  deleteCake,
  updateCake,
};
