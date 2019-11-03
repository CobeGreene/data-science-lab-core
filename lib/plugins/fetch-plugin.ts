import { PluginOptions } from "./plugin-options";
import { Vector } from "../models";

export abstract class FetchPlugin {
    abstract getOptions(): PluginOptions;
    abstract fetch(): Vector[];
}
