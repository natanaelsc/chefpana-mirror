import { Request, Response } from "express";
import { CreateLikePostUseCase } from "./CreateLikePostUseCase";

class CreateLikePostController {

    async handle(req: Request, res: Response) {

        const { id } = req.user;

        return res.status(200).json(
            await new CreateLikePostUseCase().like({
                postId: req.params.id,
                userId: id
            })
        )
    }

}

export { CreateLikePostController };