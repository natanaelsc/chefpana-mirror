import { prismaClient } from "@shared/infra/prisma/prismaClient"

class FindAllCategoriesUseCase {

    async findAllCategories() {
        
        return await prismaClient.category.findMany({
            where: {
                isActive: true
            },
            orderBy: {
                createdAt: "desc"
            }
            
            // include: {
            //     Recipes: true
            // }
        })
    }
}

export { FindAllCategoriesUseCase }