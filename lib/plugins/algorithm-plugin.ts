import { PluginOptions } from "./plugin-options";
import { RecorderService } from "../services";
import { PluginInputs } from "./plugin-inputs";
import { PluginDataInput } from "../models";

export abstract class AlgorithmPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginInputs;

    abstract initialize(): void;

    abstract step(): Promise<void>;

    abstract finishTraining(): boolean;

    setRecorderService(recorder: RecorderService) {

    } 

    abstract getTestingInputs(): { input: PluginDataInput[], output?: PluginDataInput[] };

    abstract test(argument: {[id: string]: any[]}): {[id: string]: any[]};

    abstract export(minimal: boolean): Promise<string>;
    abstract import(json: string, minimal: boolean): Promise<AlgorithmPlugin>;
}