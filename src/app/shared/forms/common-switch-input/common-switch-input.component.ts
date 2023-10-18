import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-common-switch-input',
    templateUrl: './common-switch-input.component.html',
    styleUrls: ['./common-switch-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CommonSwitchInputComponent),
        }
    ]
})
export class CommonSwitchInputComponent implements OnInit, ControlValueAccessor {

    // @ts-ignore
    @Input() form: FormGroup;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() formControlName: string = '';

    @Output() checkedEmitter = new EventEmitter<boolean>();

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

    change($event: Event) {
        // @ts-ignore
        let checked = $event.currentTarget?.checked;
        this.checkedEmitter.emit(checked);
    }
}
