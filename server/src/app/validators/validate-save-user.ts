import { ajv } from '../../config';

const saveUserSchema = {
    title: 'save-user',
    type: 'object',
    required: ['name', 'age'],
    properties: {
        name: { type: 'string', format: 'non-empty-string' },
        age: { type: 'number', minimum: 0 }
    }
};

export function validateSaveUser(user: any) {
    ajv.validate(saveUserSchema, user);
    return ajv.errors;
}