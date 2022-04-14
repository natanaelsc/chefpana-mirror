import { prismaClient } from "@shared/infra/prisma/prismaClient";

class FindAllUsersUseCase {
    
    async findAllUsers() {
        return await prismaClient.users.findMany({
            include: {
                Posts: {
                    where: {
                        isPublished: true,
                        isDeleted: false,
                        isActive: true
                    }
                },
                Likes: {
                    where: {
                        isLiked: true
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        });
    }
}

export { FindAllUsersUseCase };