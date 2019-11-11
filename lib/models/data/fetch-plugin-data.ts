export class FetchPluginData {
    public features: string[];
    public examples: any[][];

    constructor(fetch: {
        features: string [],
        examples: any[][]
    }) {
        this.features = fetch.features;
        this.examples = fetch.examples;
    }
}