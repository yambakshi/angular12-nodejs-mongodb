import { ObjectId } from 'mongodb';
import { env } from '../../config';
import { mongoDb } from '../dal';


export async function queryData(ids: string[]) {
    const filter = ids.length > 0 ? { _id: { $in: ids.map(_id => new ObjectId(_id)) } } : {};
    const cursor = await mongoDb.find(env.mongodb.dbName, 'collection-demo', filter, { date: -1 });
    return cursor.toArray();
}