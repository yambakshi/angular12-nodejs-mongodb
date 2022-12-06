import { ajv } from '../../config';

const saveDataSchema = {
    title: 'save-data',
    type: 'object',
    required: ['name', 'age'],
    properties: {
        name: { type: 'string', format: 'non-empty-string' },
        age: { type: 'number', minimum: 0 }
    }
};

export function validateSaveData(data: any) {
    ajv.validate(saveDataSchema, data);
    return ajv.errors;
}