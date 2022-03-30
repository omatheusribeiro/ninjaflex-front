import { Component, forwardRef, Output} from '@angular/core';
import { Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputNinjaFlexComponent),
    multi: true
};

@Component({
  selector: 'input-ninaflex',
  templateUrl: './input-ninaflex.component.html',
  styleUrls: ['./input-ninaflex.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class InputNinjaFlexComponent implements ControlValueAccessor{

    @Input() type: string = "text";
    @Input() placeholder: string = "";
    @Input() nameLabel: string = "";
    @Input() nameInput: string = "";

    private innerValue: any = '';

    private onTouchedCallback: () => void = noop;

    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
