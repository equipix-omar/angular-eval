import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Address} from "ngx-google-places-autocomplete/objects/address";

@Component({
    selector: 'app-common-input',
    templateUrl: './common-input.component.html',
    styleUrls: ['./common-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CommonInputComponent),
        }
    ]
})
export class CommonInputComponent implements OnInit, ControlValueAccessor {

    // @ts-ignore
    @Input() form: FormGroup;
    @Input() label: string = '';
    @Input() optional_label: string = '';
    @Input() placeholder: string = '';
    @Input() formControlName: string = '';
    @Input() input_type: string = 'text';
    @Input() is_readonly: boolean = false;
    @Input() is_required: boolean = false;
    @Input() submitted: boolean = false;

    @Input() is_phone_number: boolean = false;
    @Input() is_autocomplete_address: boolean = false;
    @Input() is_password: boolean = false;
    @Input() trigger_change_input: boolean = false;

    @Output() addressChangeEmitter = new EventEmitter<Address>();

    showPassword: boolean = false;

    options: any = {
      componentRestrictions: {country: 'US'}
    }

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

    get formControl() {
      return this.form?.controls;
    }

    hasError(validation: string) {
      let errors = this.formControl[this.formControlName].errors;
      return errors ? errors[validation] : false;
    }

    hasAnyError() {
      return this.formControl[this.formControlName].errors;
    }

    toggleFieldTextType() {
      this.showPassword = !this.showPassword;
    }

    handleAddressChange(address: Address) {
      this.addressChangeEmitter.emit(address);
    }

    change($event: any) {
      if (this.trigger_change_input){
        this.form.controls[this.formControlName].setValue($event?.target?.value);
      }
    }


}
