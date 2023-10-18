import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-common-textarea',
    templateUrl: './common-textarea.component.html',
    styleUrls: ['./common-textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CommonTextareaComponent),
        }
    ]
})
export class CommonTextareaComponent implements OnInit, ControlValueAccessor {

    // @ts-ignore
    @Input() form: FormGroup;

    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() formControlName: string = '';

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
