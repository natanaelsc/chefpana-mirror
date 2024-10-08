import { Response, Request } from "express";
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {
    async handle( req: Request, res: Response ) {

        const { email, password } = req.body;

        const authenticateUserUseCase = new AuthenticateUserUseCase();

        const result = await authenticateUserUseCase.execute({
            email,
            password
        })

        return res.status(200).json(result);
    }
}

export { AuthenticateUserController }