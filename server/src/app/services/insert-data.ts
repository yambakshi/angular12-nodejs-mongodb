import { env } from '../../config';
import { mongoDb } from '../dal';
import { Data } from '../models';


export async function insertData(data: Data) {
    data.createdAt = new Date();

    const { insertedId } = await mongoDb.insertOne(env.mongodb.dbName, 'collection-demo', data);
    data._id = insertedId.toString();

    return {
        success: true,
        message: 'Successfully inserted data',
        data
    };
}