import { ILikeDto } from "@modules/accounts/dtos/ILikeDto";
import { AppError } from "@shared/errors/AppError";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class CreateLikePostUseCase {

    async like({ postId, userId}: ILikeDto) {

        // Busca usuário no banco
        const user = await prismaClient.users.findUnique({ where: { id: userId } });

        // Verifica se usuário existe
        if (!user) throw new AppError("User not found", 404)

        // Busca post no banco
        const post = await prismaClient.post.findUnique({ where: { id: postId }});

        // Verifica se post existe ou se foi deletado e inativo
        if (!post || (post.isDeleted && !post.isActive)) throw new AppError("Post not found", 404);
        
        // Verifica se usuário já curtiu o post
        const userAlreadyLiked = await prismaClient.post.findFirst({
            where: {
                id: post.id,
                Likes: {
                    some: {
                        userId: user.id
                    }
                }
            }
        })

        // Se o usuário já curtiu o post
        if (userAlreadyLiked) {
            // Remove like
            await prismaClient.like.deleteMany({
                where: {
                    postId: post.id,
                    userId: user.id
                }
            });
            // Atualiza tabela post com -1 no número de likes
            return await prismaClient.post.update({
                where: {
                    id: post.id
                },
                include: {
                    Recipe: {
                        select: {
                            id: true,
                            title: true,
                        }
                    },
                    Likes: {
                        select: {
                            id: true,
                            userId: true,
                        }
                    }
                },
                data: {
                    numberOfLikes: post.numberOfLikes - 1
                }
            });
        } else {
            // Adiciona like
            await prismaClient.like.create({
                data: {
                    userId: user.id,
                    postId: post.id
                }
            });
            // Atualiza tabela post com +1 no número de likes
            return await prismaClient.post.update({
                where: {
                    id: post.id
                },
                include: {
                    Recipe: {
                        select: {
                            id: true,
                            title: true,
                        }
                    },
                    Likes: {
                        select: {
                            id: true,
                            userId: true,
                        }
                    }
                },
                data: {
                    numberOfLikes: post.numberOfLikes + 1
                }
            });
        }
    }
}

export { CreateLikePostUseCase };