import { Request, Response } from "express"
import { UpdateUserAvatarUseCase } from "./UdpadeUserAvatarUseCase";


class UpdateUserAvatarController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.user;
        const  avatar_file = request.file?.filename;

        const updateUserAvatarUseCase = new UpdateUserAvatarUseCase();

        await updateUserAvatarUseCase.execute({ user_id: id, avatar_file});

        return response.status(204).send();
    }
}

export { UpdateUserAvatarController }