import { env } from '../../config';
import { mongoDb } from '../dal';
import { User } from '../models';


export async function insertUser(user: User) {
    user.createdAt = new Date();

    const { insertedId } = await mongoDb.insertOne(env.mongodb.dbName, 'seed-users', user);
    user._id = insertedId.toString();

    return {
        success: true,
        message: 'Successfully inserted user',
        data: user
    };
}