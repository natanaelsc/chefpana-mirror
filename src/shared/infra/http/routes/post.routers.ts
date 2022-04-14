import { CreatePostController } from "@modules/accounts/useCases/createPost/CreatePostController";
import { DeletePostController } from "@modules/accounts/useCases/deletePost/DeletePostController";
import { CreateFavoritePostController } from "@modules/accounts/useCases/createFavoritePost/CreateFavoritePostController";
import { FindAllPostsController } from "@modules/accounts/useCases/findAllPosts/FindAllPostsController";
import { FindPostByIdController } from "@modules/accounts/useCases/findPostById/FindPostByIdController";
import { Router } from "express";
import { ensureAutheticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateLikePostController } from "@modules/accounts/useCases/createLikePost/CreateLikePostController";
import { FindAllLikesOnPostController } from "@modules/accounts/useCases/findAllLikesOnPost/FindAllLikesOnPostController";

const postRouters = Router();

postRouters.post('/posts', ensureAutheticateUser, new CreatePostController().handle) // Cria um post

postRouters.get('/posts', ensureAutheticateUser, new FindAllPostsController().handle) // Lista todos os posts

postRouters.get('/posts/:id', ensureAutheticateUser, new FindPostByIdController().handle) // Lista um post pelo id

postRouters.delete('/posts/:id', ensureAutheticateUser, new DeletePostController().handle) // Deleta post por id

postRouters.post('/posts/:id/likes', ensureAutheticateUser, new CreateLikePostController().handle) // Cria/Remove like

postRouters.get('/posts/:id/likes', ensureAutheticateUser, new FindAllLikesOnPostController().handle) // Lista todos os usuários que curtiram o post

postRouters.post('/posts/:id/favorites', ensureAutheticateUser, new CreateFavoritePostController().handle) // Cria/Remove favorito

export { postRouters }