import { Request, Response } from 'express';
import { logger } from '../../config';
import { insertUser } from '../services';
import { validateSaveUser } from '../validators';


async function processSaveUser(user: any) {
    const validationErrors = validateSaveUser(user);
    if (validationErrors) {
        const firstErr = validationErrors[0];
        throw new Error(`Invalid 'save-user' request: '${firstErr.data}' ${firstErr.message}`);
    }

    const output = await insertUser(user);
    return output;
}

export async function saveUser(req: Request, res: Response) {
    try {
        logger.info({ message: `Received 'saveUser' request '${req.originalUrl}'`, label: 'saveUser' });
        const output = await processSaveUser(req.body);
        res.send(output);
    } catch (error: any) {
        logger.error({ message: error.message, label: 'saveUser' });
        res.status(500).send({ success: false, message: error.message });
    }
}