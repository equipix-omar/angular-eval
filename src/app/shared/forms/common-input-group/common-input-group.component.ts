import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-common-input-group',
    templateUrl: './common-input-group.component.html',
    styleUrls: ['./common-input-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CommonInputGroupComponent),
        }
    ]
})
export class CommonInputGroupComponent implements OnInit, ControlValueAccessor {

    // @ts-ignore
    @Input() form: FormGroup;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() icon: string = '$';
    @Input() formControlName: string = '';
    @Input() input_type: string = 'text';

    constructor() {
    }

    ngOnInit(): void {
    }

    onChange: any = () => {
    }
    onTouch: any = () => {
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    // d) copy paste this code
    writeValue(input: string) {
    }

}
