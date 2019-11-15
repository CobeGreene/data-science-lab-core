export class PluginDataInput {
    public id: string;
    public label: string;
    public type: string;
    public min: number;
    public max?: number;

    constructor(input: {
        id: string, label: string,
        type: string, min: number,
        max?: number
    }) {
        this.id = input.id;
        this.label = input.label;
        this.type = input.type;
        this.min = input.min;
        this.max = input.max;
    }
}