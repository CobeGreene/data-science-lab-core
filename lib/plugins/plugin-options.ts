import { OptionList } from "../models";

export abstract class PluginOptions {
    abstract submit(inputs: {[id: string]: any}): void;
    abstract options(): OptionList;
    abstract executeCommand(cmd: string): void;
    abstract noMore(): boolean;
}