import { Request, Response } from "express";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

class FindAllUsersController {

    async handle(req: Request, res: Response) {

        const { id } =  req.user;
        
        return res.status(200).json(
            await new FindAllUsersUseCase().findAllUsers()
        );
    }
}

export { FindAllUsersController }