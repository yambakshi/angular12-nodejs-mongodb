export class Data {
    _id: string;
    name: string;
    age: number;
    createdAt: Date;
    lastModified: Date;

    constructor(data?: Data) {
        if (!data) return;
        this._id = data._id;
        this.name = data.name;
        this.age = data.age;
        this.createdAt = data.createdAt;
        this.lastModified = data.lastModified;
    }
}