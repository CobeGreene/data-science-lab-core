import { PluginOptions } from "./plugin-options";
import { Vector } from "../models";
import { FileService } from "../services";

export abstract class FetchPlugin {
    abstract getOptions(): PluginOptions;
    abstract fetch(): Vector[];

    setFileService(fileService: FileService) {

    }
}
