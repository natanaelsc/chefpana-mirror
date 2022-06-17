import { ICreateCategoryDto } from "@modules/accounts/dtos/ICreateCategoryDto";
import { prismaClient } from "@shared/infra/prisma/prismaClient";

class CreateCategoryUseCase {

    async create({ title }: ICreateCategoryDto) {

        // const date = new Date();

        // const options = {
        //     year: 'numeric', month: 'numeric', day: 'numeric',
        //     hour: 'numeric', minute: 'numeric', second: 'numeric',
        //     hour12: false,
        //     timeZone: 'America/Sao_Paulo'
        // };

        return await prismaClient.category.create({
            data: {
                title: title,
                // createdAt: new Intl.DateTimeFormat('pt-BR', options).format(date)
            }
        })
    }
}

export { CreateCategoryUseCase }