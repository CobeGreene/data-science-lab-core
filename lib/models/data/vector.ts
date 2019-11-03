
export class Vector {
    public name: string;
    public data: number[] | string[] | boolean[];
    
    constructor(vector: {
        name: string, data: number[] | string[] | boolean[]
    }) {
        this.name = vector.name;
        this.data = vector.data;
    }
}