import { ICreatePostDto } from "@modules/accounts/dtos/ICreatePostDto";
import { ICreateRecipeDto } from "@modules/accounts/dtos/ICreateRecipeDto";
import { AppError } from "@shared/errors/AppError";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class CreatePostUseCase {

    
    
    async create({ userId, title, imageUrl, categoryId }: ICreatePostDto & ICreateRecipeDto) {

        // Busca usuário no banco
        const user = await prismaClient.users.findUnique({ where: { id: userId } });
        
        // Verifica se usuário existe
        if (!user) throw new AppError("User not found", 404)

        // Se categoryId for null
        if (!categoryId) throw new AppError("CategoryId is required");

        // Busca categoria no banco
        const category = await prismaClient.category.findUnique({ where: { id: categoryId } });

        // Se categoria não existir
        if (!category) throw new AppError("Category not found");

        // Cria post no banco
        return await prismaClient.post.create({
            data: {
                Recipe: {
                    create: {
                        title: title,
                        imageUrl: imageUrl,
                        categoryId: categoryId
                    }
                },
                User: {
                    connect: {
                        id: userId
                    }
                }
            },
            include: {
                Recipe: true,
                User: {
                    select: {
                        id: true,
                        fullName: true
                    }
                },
                Comments: true,
                Likes: true,
            }
        });
    }
}

export { CreatePostUseCase }