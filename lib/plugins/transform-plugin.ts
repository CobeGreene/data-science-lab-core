import { PluginOptions } from "./plugin-options";
import { PluginData } from "../models";
import { PluginInputs } from "./plugin-inputs";


export abstract class TransformPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginInputs;
    abstract transform(): PluginData[] | PluginData;
} 