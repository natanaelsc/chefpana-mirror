import { Request, Response } from "express";
import { FindAllPostsUseCase } from "./FindAllPostsUseCase";

class FindAllPostsController {

    async handle(req: Request, res: Response) {

        const { id } = req.user;

        return res.status(200).json(
            await new FindAllPostsUseCase().findAllPosts({ userId: id })
        );
    }
}

export { FindAllPostsController }