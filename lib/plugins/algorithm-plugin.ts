import { PluginOptions } from "./plugin-options";
import { RecorderService } from "../services";
import { PluginInputs } from "./plugin-inputs";

export abstract class AlgorithmPlugin {
    abstract getOptions(): PluginOptions;
    abstract getInputs(): PluginInputs;

    abstract initialize(): void;

    abstract step(): void;

    setRecorderService(recorder: RecorderService) {

    } 
}