import { CreateCategoryController } from "@modules/accounts/useCases/createCategory/CreateCategoryController";
import { FindAllCategoriesController } from "@modules/accounts/useCases/findAllCategories/FindAllCategoriesController";
import { Router } from "express";
import { ensureAutheticateUser } from "../middlewares/ensureAuthenticateUser";

const categoryRouter = Router();

categoryRouter.post('/categories', ensureAutheticateUser, new CreateCategoryController().handle) // Cria uma categoria

categoryRouter.get('/categories', ensureAutheticateUser, new FindAllCategoriesController().handle) // Lista todas as categorias

export { categoryRouter } 