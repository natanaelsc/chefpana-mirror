import { Request, Response } from "express";
import { CreateFavoritePostUseCase } from "./CreateFavoritePostUseCase";

class CreateFavoritePostController {

    async handle(req: Request, res: Response) {

        const { id } = req.user;

        return res.status(200).json(
            await new CreateFavoritePostUseCase().favorite({
                postId: req.params.id,
                userId: id
            })
        )
    }

}

export { CreateFavoritePostController };