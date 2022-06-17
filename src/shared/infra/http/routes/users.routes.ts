import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';

import { ensureAutheticateUser } from '@shared/infra/http/middlewares/ensureAuthenticateUser';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UdpadeUserAvatarController';
import { FindAllUsersController } from '@modules/accounts/useCases/findAllUsers/FindAllUsersController';
import { FindUserByIdController } from '@modules/accounts/useCases/findUserById/FindUserByIdController';

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController(); 
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', ensureAutheticateUser, new FindAllUsersController().handle); // Lista todos os usuários. Somente com autenticação

usersRoutes.get('/:id', ensureAutheticateUser, new FindUserByIdController().handle); // Lista um usuário específico. Somente com autenticação

usersRoutes.patch('/avatar', ensureAutheticateUser, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes }