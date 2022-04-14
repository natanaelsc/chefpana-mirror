import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

class DeletePostController {

    async handle(req: Request, res: Response) {
        
        const { id } = req.user;
        
        return res.status(200).json(
            await new DeletePostUseCase().delete({ id: req.params.id, userId: req.user.id })
        )
    }
}

export { DeletePostController }