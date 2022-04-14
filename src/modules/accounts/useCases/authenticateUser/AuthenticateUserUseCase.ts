import { prismaClient } from '@shared/infra/prisma/prismaClient';
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from '@shared/errors/AppError';
interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        fullName: string,
        email: string,
        isChef: boolean,
    },
    token: string;
}

class  AuthenticateUserUseCase {

    async execute({ email, password}: IRequest): Promise<IResponse> {
    
    const userExist = await prismaClient.users.findFirst({
        where: { 
            email,
        }
    })

    if (!userExist) throw new AppError("User not found", 404);
    
    const passwordMath = await compare(password, userExist.password);
    
    if (!passwordMath) throw new AppError("Invalid password", 401);
    
    const token = sign({}, process.env.SECRET_KEY, {
        subject: userExist.id,
        expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
        user: {
            fullName: userExist.fullName,
            email: userExist.email,
            isChef: userExist.isChef,
        }, 
        token
    } 

    return tokenReturn;
   }
}

export { AuthenticateUserUseCase }