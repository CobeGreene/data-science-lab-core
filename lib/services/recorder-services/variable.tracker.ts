

export class VariableTracker {
    public label: string;
    public description?: string;
    public value: any;

    constructor(variable: {
        label: string, description?: string,
        value: any,
    }) {
        this.label = variable.label;
        this.description = variable.description;
        this.value = variable.value;
    }
}