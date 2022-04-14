import { ICreatePostDto } from "@modules/accounts/dtos/ICreatePostDto"
import { AppError } from "@shared/errors/AppError"
import { prismaClient } from "@shared/infra/prisma/prismaClient"

class FindPostByIdUseCase {

    async findPostById({ id }: ICreatePostDto) {

        // Busca post no banco
        const post = await prismaClient.post.findUnique({
            where: {
                id: id
            },
            include: {
                Recipe: true,
                Likes: {
                    where: {
                        isLiked: true
                    }
                },
                Comments: {
                    select: {
                        id: true,
                        text: true,
                    },
                    where: {
                        isActive: true,
                        isDeleted: false
                    }
                }
            }
        })

        // Verifica se post existe ou se foi deletado
        if (!post || post.isDeleted) throw new AppError("Post not found", 404)

        if (!post.isActive) throw new AppError("Post not active", 404)

        return post;
    }
}

export { FindPostByIdUseCase }