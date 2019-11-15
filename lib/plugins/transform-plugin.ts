import { PluginOptions } from "./plugin-options";
import { PluginData } from "../models";


export abstract class TransformPlugin {
    abstract getOptions(): PluginOptions;

    abstract transform(): PluginData;
} 