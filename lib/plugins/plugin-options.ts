import { Option } from "../models";

export abstract class PluginOptions {
    abstract submit(inputs: {[id: string]: any}): void;
    abstract options(): Option[];
    executeCommand(cmd: string): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        })
    };
    abstract noMore(): boolean;
}