import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

async function ensureAutheticateUser ( request: Request, response: Response, next: NextFunction) {
    
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({ 
        message: "Token Missing!",
        });
    }

    const [, token ] = authHeader.split(" ");

    try { 

        const { sub: user_id } = verify( token, process.env.SECRET_KEY) as IPayload;

        request.user = {
            id: user_id,
        };

        return next();

    } catch (err) { 

        return response.status(401).json({ 
            message: "Invalid Token!",
        });
    }
}

export { ensureAutheticateUser }