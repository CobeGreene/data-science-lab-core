import { PluginOptions } from "./plugin-options";
import { PluginData } from "../models";
import { FileService } from "../services";

export abstract class FetchPlugin {
    abstract getOptions(): PluginOptions;
    abstract fetch(): PluginData;

    setFileService(fileService: FileService) {

    }
}
