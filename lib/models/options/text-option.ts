import { Option } from './option';
import { OptionTypes } from './option-types';

export class TextOption extends Option {

    public max?: number;
    public min?: number;
    public pattern?: string;

    constructor(option: { id: string, label: string, max?: number, min?: number, pattern?: string }) {
        super({ id: option.id, label: option.label, type: OptionTypes.Text });
        this.max = option.max;
        this.min = option.min;
        this.pattern = option.pattern;
    }
}
