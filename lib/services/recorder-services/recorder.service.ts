import { VariableTracker } from "./variable.tracker";

export interface RecorderService {
    record(variables: VariableTracker[]): void;
}