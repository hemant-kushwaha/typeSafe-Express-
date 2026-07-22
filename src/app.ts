import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express';
import logger from './config/logger.js';
import type { HttpError } from 'http-errors';
import createHttpError from 'http-errors';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const err = createHttpError(401, 'You cannot access this site');
    next(err); //Value passed in Next Function is considered as error
    res.send('Welcome to server');
});

//global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(error.message);
    const statusCode = error.status || 500;

    res.status(statusCode).json({
        errors: [
            { type: error.name, msg: error.message, path: '', location: '' },
        ],
    });
});

export default app;
