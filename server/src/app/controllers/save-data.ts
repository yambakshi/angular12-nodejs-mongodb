import { Request, Response } from 'express';
import { logger } from '../../config';
import { insertData } from '../services';
import { validateSaveData } from '../validators';


async function processGetData(data: any) {
    const validationErrors = validateSaveData(data);
    if (validationErrors) {
        const firstErr = validationErrors[0];
        throw new Error(`Invalid 'save-data' request: '${firstErr.data}' ${firstErr.message}`);
    }

    const output = await insertData(data);
    return output;
}

export async function saveData(req: Request, res: Response) {
    try {
        logger.info({ message: `Received 'saveData' request '${req.originalUrl}'`, label: 'saveData' });
        const data = await processGetData(req.body);
        res.send(data);
    } catch (error: any) {
        logger.error({ message: error.message, label: 'saveData' });
        res.status(500).send({ success: false, message: error.message });
    }
}