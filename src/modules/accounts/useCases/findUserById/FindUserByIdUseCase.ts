import { IcreateUserDto } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@shared/errors/AppError";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class FindUserByIdUseCase {
 
    async findById({ id }: IcreateUserDto ) {

        // Busca usuário no banco
        const user = await prismaClient.users.findUnique({
            where: {
                id: id
            },
            include: {
                Posts: {
                    select: {
                        id: true,
                        createdAt: true,
                    }
                }
            }
        })

        // Verifica se usuário existe
        if (!user) throw new AppError("User not found", 404)
        
        return user;
    }
}

export { FindUserByIdUseCase };