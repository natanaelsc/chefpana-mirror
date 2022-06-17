import { Request, Response } from "express";
import { FindPostByIdUseCase } from "./FindPostByIdUseCase";

class FindPostByIdController {

    async handle(req: Request, res: Response) {
        
        const { id } = req.user;

        return res.status(200).json(
            await new FindPostByIdUseCase().findPostById(req.params)
        );
    }
}

export { FindPostByIdController }