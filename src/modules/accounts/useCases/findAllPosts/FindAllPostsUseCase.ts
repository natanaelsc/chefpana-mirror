import { ICreatePostDto } from "@modules/accounts/dtos/ICreatePostDto";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class FindAllPostsUseCase {
    
    async findAllPosts({ userId }: ICreatePostDto) {
        return await prismaClient.post.findMany({
            where: {
                isPublished: true,
                isDeleted: false,
                isActive: true,
                userId: {
                    not: userId // Exclui posts do usuário
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                // Recipe: true,
                Recipe: {
                    select: {
                        id: true,
                        title: true,
                        imageUrl: true,
                    }
                },
                User: {
                    select: {
                        fullName: true,
                        email: true
                    }
                },
                Likes: {
                    where: {
                        isLiked: true
                    },
                    select: {
                        userId: true
                    }
                }
            }
        })
    }
}

export { FindAllPostsUseCase };