import { PluginOptions } from './plugin-options';
import { PluginInputs } from './plugin-inputs';

export abstract class VisualizationPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginInputs;
    abstract visualization(): string;
}