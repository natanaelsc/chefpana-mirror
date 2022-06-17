import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';
import { postRouters } from './post.routers';
import { categoryRouter } from './category.routers';

const router = Router();

router.use('/users', usersRoutes);
router.use(authenticateRoutes);
router.use(postRouters);
router.use(categoryRouter);

export { router };