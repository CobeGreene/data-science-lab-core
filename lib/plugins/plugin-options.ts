import { OptionList } from "../models";

export abstract class PluginOptions {
    abstract submit(inputs: {[id: string]: any}): void;
    abstract options(): OptionList;
    abstract noMore(): boolean;
}