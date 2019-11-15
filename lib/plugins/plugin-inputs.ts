import { PluginData, PluginDataInput } from '../models';

export abstract class PluginInputs {
    abstract inputs(): PluginDataInput[];
    abstract submit(inputs: {[id: string]: PluginData}): PluginData;
}

