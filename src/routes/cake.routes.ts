import express from "express";
import { cakeService } from "../domain/services/cake.service";
// import multer from "multer";
// const upload = multer({ dest: "public" });

export const cakeRoute = express.Router();

cakeRoute.get("/", cakeService.getAllCakes);
cakeRoute.get("/:id", cakeService.getCakeById);
cakeRoute.get("/title/:title", cakeService.getCakeByTitle);
cakeRoute.post("/", cakeService.createCake);
cakeRoute.delete("/:id", cakeService.deleteCake);
cakeRoute.put("/:id", cakeService.updateCake);
