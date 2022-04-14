import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {

    async handle(req: Request, res: Response) {
        
        const { title, imageUrl, categoryId } = req.body;
        
        const { id } = req.user;

        return res.status(201).json(
            await new CreatePostUseCase().create({
                title, 
                imageUrl,
                categoryId,
                userId: id
        }));
    }
}

export { CreatePostController };