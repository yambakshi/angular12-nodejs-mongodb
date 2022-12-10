import { Request, Response } from 'express';
import { logger } from '../../config';
import { queryUsers } from '../services';

export async function getUsers(req: Request, res: Response) {
    try {
        logger.info({ message: `Received 'getUsers' request '${req.originalUrl}'`, label: 'getUsers' });
        const query = req.params.id ? [req.params.id] : [];
        const output = await queryUsers(query);
        res.send(output);
    } catch (error: any) {
        logger.error({ message: error.message, label: 'getUsers' });
        res.status(500).send({ success: false, message: error.message });
    }
}