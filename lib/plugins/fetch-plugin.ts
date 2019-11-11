import { PluginOptions } from "./plugin-options";
import { FetchPluginData } from "../models";
import { FileService } from "../services";

export abstract class FetchPlugin {
    abstract getOptions(): PluginOptions;
    abstract fetch(): FetchPluginData;

    setFileService(fileService: FileService) {

    }
}
