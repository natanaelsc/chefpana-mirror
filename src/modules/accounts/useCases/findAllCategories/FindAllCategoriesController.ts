import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";

class FindAllCategoriesController {

    async handle(req: Request, res: Response) {

        const { id } =  req.user;

        return res.status(200).json(
            await new FindAllCategoriesUseCase().findAllCategories()
        );
    }
}

export { FindAllCategoriesController }