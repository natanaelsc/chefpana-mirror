import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import { router } from './routes';
import { AppError } from '@shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(cors())

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ message: err.message });
        }

        return response.status(500).json({
            status: 'error',
            message: `Internal Server Error - ${err.message}`,
        });
    },
);

const PORT = 3333
app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`))