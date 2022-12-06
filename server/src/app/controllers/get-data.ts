import { Request, Response } from 'express';
import { logger } from '../../config';
import { queryData } from '../services';

export async function getData(req: Request, res: Response) {
    try {
        logger.info({ message: `Received 'getData' request '${req.originalUrl}'`, label: 'getData' });
        const query = req.params.id ? [req.params.id] : [];
        const data = await queryData(query);
        res.send(data);
    } catch (error: any) {
        logger.error({ message: error.message, label: 'getData' });
        res.status(500).send({ success: false, message: error.message });
    }
}