declare namespace Express {
    export interface Request {
        id_user: string;
        user: {
            id: string;
        }
    }
}