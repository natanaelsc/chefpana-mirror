import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

    async handle(req: Request, res: Response) {
        const { title } = req.body;
        return res.status(201).json(
            await new CreateCategoryUseCase().create({ title })
        );
    }
}

export { CreateCategoryController };