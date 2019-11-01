import { PluginOptions } from "./plugin-options";

export abstract class FetchPlugin {
    abstract getOptions(): PluginOptions;
    abstract fetch(): boolean;
}
