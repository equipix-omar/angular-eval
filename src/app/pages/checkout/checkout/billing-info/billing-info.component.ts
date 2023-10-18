import {Component, Input, OnInit} from '@angular/core';
import {usStates} from '../../../../storage/content/usStates';
import {Address} from "ngx-google-places-autocomplete/objects/address";
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() submitted: boolean = false;

  usStates: { name: string, abbreviation: string } [] = [];

  options: any = {
    componentRestrictions: {country: 'US'}
  }
  city: string = '';
  us_state: any = null;
  zip_code: any = null;

  months: number [] = [];
  years: number [] = [];

  constructor() {
    this.usStates = usStates;
  }

  ngOnInit(): void {
    this.generateMonths();
    this.generateYears();
  }

  generateMonths() {
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }
  }

  generateYears() {
    let min = new Date().getFullYear()
    let max = min + 20;

    for (let i = max; i >= min; i--) {
      this.years.push(i)
    }
  }

  handleAddressChange(address: Address) {
    let address_components = address.address_components;
    address_components.forEach(component => {
      let types = component.types;
      types.forEach(target_type => {
        if (target_type == 'administrative_area_level_1') {
          this.us_state = component.long_name;
          this.form.controls['billing_address_state'].setValue(this.us_state);
        }

        if (target_type == "locality") {
          this.city = component.long_name;
          this.form.controls['billing_address_city'].setValue(this.city);
        }

        if (target_type == "postal_code") {
          this.zip_code = component.long_name;
          this.form.controls['billing_address_zip_code'].setValue(this.zip_code);
        }
        this.form.controls['billing_address_address_line1'].setValue((address.formatted_address).split(',')[0]);
        this.form.controls['billing_address_address_full'].setValue((address.formatted_address));
        console.log("billing_address_address_line1 api ",address.formatted_address.split(',')[0]);

      })
    });

  }

}
