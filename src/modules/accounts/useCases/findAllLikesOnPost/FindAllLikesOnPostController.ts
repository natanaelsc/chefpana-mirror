import { Request, Response } from "express";
import { FindAllLikesOnPostUseCase } from "./FindAllLikesOnPostUseCase";

class FindAllLikesOnPostController {

    async handle(req: Request, res: Response) {
        
        const { id } = req.user;

        return res.status(200).json(
            await new FindAllLikesOnPostUseCase().findAllLikesOnPost(id, req.params.id)
        )
    }
}

export { FindAllLikesOnPostController }