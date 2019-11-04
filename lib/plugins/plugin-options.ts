import { OptionList } from "../models";

export abstract class PluginOptions {
    abstract submit(inputs: {[id: string]: any}): void;
    abstract options(): OptionList;
    executeCommand(cmd: string): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        })
    };
    abstract noMore(): boolean;
}