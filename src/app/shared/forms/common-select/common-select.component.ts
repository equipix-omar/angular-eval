import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-common-select',
    templateUrl: './common-select.component.html',
    styleUrls: ['./common-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CommonSelectComponent),
        }
    ]
})
export class CommonSelectComponent implements OnInit, ControlValueAccessor{


    // @ts-ignore
    @Input() form: FormGroup;

    @Input() label: string = '';
    @Input() placeholder: string = '';

    @Input() formControlName: string = '';

    @Input() is_multiple: boolean = false;

    @Output() changeEmitter = new EventEmitter<any>();

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

    changeSelect($event: Event) {
        // @ts-ignore
        let value = $event?.currentTarget?.value;
        this.changeEmitter.emit(value);
    }
}
