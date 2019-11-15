import { PluginOptions } from "./plugin-options";
import { PluginData, PluginDataInput } from "../models";


export abstract class TransformPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginDataInput[];
    abstract transform(): PluginData[] | PluginData;
} 