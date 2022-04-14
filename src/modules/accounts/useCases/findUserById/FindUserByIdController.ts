import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

class FindUserByIdController {

    async handle(req: Request, res: Response) {

        const { id } = req.user

        return res.status(200).json(
            await new FindUserByIdUseCase().findById(req.params)
        )
    }
}

export { FindUserByIdController }