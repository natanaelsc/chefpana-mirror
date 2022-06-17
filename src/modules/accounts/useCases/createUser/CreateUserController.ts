import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle ( req: Request, res: Response ) {

        const { fullName, email, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();
        const result = await createUserUseCase.execute({
            fullName,
            email,
            password
        });

        return res.status(201).json(result); //Remover o json depois!
    }
}

export { CreateUserController };