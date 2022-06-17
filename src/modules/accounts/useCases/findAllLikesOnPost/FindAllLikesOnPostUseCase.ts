import { AppError } from "@shared/errors/AppError";
import { prismaClient } from "@shared/infra/prisma/prismaClient"

class FindAllLikesOnPostUseCase {

    async findAllLikesOnPost(userId: string, postId: string) {
        
        // Busca post no banco
        const user = await prismaClient.users.findUnique({ where: { id: userId } });
        
        // Verifica se usuário existe
        if (!user) throw new AppError("User not found", 404);

        // Busca usuário no banco
        const post = await prismaClient.post.findUnique({ where: { id: postId } });

        //  Verifica se post existe ou foi deletado
        if (!post || post.isDeleted) throw new AppError("Post not found", 404);

        // Busca Likes do post no banco
        return await prismaClient.like.findMany({
            where: { postId: post.id },
            include: {
                User: {
                    select: {
                        fullName: true
                    }
                }
            }
        })
    }
}

export { FindAllLikesOnPostUseCase }