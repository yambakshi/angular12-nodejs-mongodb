export class Data {
    _id: string;
    name: string;
    age: number;
    createdAt: Date;
    lastModified: Data;

    constructor(data?: Data) {
        if (!data) return;
        this._id = data._id;
        this.name = data.name;
        this.age = data.age;
    }
}