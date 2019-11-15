export class PluginData {
    public features: string[];
    public examples: any[][];

    constructor(data: {
        features: string [],
        examples: any[][]
    }) {
        this.features = data.features;
        this.examples = data.examples;
    }
}