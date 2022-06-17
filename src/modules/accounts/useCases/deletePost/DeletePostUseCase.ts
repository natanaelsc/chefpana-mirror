import { ICreatePostDto } from "@modules/accounts/dtos/ICreatePostDto";
import { AppError } from "@shared/errors/AppError";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class DeletePostUseCase {

    async delete({ id, userId }: ICreatePostDto) {

        const post = await prismaClient.post.findFirst({ where: { id: id, userId: userId }});

        if (!post) throw new AppError("Post not found", 404);

        // Acredito que não é tão relevante, mas vou deixar por precaução.
        if (post.userId !== userId) throw new AppError("You can't delete this post", 401);

        if (post.isDeleted && !post.isActive) throw new AppError("Post already deleted", 400);
        
        return await prismaClient.post.update({
            where: { 
                id: id
            },
            data: {
                isPublished: false,
                isDeleted: true,
                isActive: false,
            }
        })
    }
}

export { DeletePostUseCase };