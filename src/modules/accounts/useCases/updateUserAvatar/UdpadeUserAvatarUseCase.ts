import { prismaClient } from "@shared/infra/prisma/prismaClient";
import { deleteFile } from "@shared/utils/file";

interface IRequest {
    user_id: string;
    avatar_file: string;
}


class UpdateUserAvatarUseCase {
    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await prismaClient.users.findFirst({
            where: {
                id: user_id,
            }
        }) 

        if (user?.avatarUrl) {
            await deleteFile(`./tmp/avatar/${user.avatarUrl}`);
        }

        await prismaClient.users.update({
            where: {
                id: user_id,
            },
            data: {
                avatarUrl: avatar_file
            }
        })
    }
}

export { UpdateUserAvatarUseCase }