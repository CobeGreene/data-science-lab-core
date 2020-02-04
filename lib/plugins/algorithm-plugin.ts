import { PluginOptions } from "./plugin-options";
import { RecorderService } from "../services";
import { PluginInputs } from "./plugin-inputs";
import { PluginDataInput } from "../models";

export abstract class AlgorithmPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginInputs;

    abstract initialize(): void;

    abstract step(): void;

    abstract finishTraining(): boolean;

    setRecorderService(recorder: RecorderService) {

    } 

    abstract getTestingInputs(): { input: PluginDataInput[], output?: PluginDataInput[] };

    abstract test(...args: any[]): any[];
}