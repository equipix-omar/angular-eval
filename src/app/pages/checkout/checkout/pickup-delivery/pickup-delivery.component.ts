import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {usStates} from '../../../../storage/content/usStates';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {CartCalculationModel} from "../../../../core/models/classes/cart.calculation.model";
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-pickup-delivery',
  templateUrl: './pickup-delivery.component.html',
  styleUrls: ['./pickup-delivery.component.scss']
})
export class PickupDeliveryComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() submitted: boolean = false;

  usStates: { name: string, abbreviation: string } [] = [];

  options: any = {
    componentRestrictions: {country: 'US'}
  }
  city: string = '';
  us_state: any = null;
  zip_code: any = null;
  us_state_short_name: any = null;

  lat!: number;
  lng!: number;

  line1: any = null;
  line2: any = null;
  full_address:any=null;
  address_object!: any;

  delivery: boolean = true;

  @Output() pickupEmitter = new EventEmitter<CartCalculationModel>();
  @Output() addressEmitter = new EventEmitter<any>();

  constructor() {
    this.usStates = usStates;
  }

  ngOnInit(): void {
  }

  handleAddressChange(address: Address) {
    let address_components = address.address_components;
    address_components.forEach(component => {
      let types = component.types;
      types.forEach(target_type => {
        if (target_type == 'administrative_area_level_1') {
          this.us_state = component.long_name;
          this.us_state_short_name = component.short_name;
          this.form.controls['address_state'].setValue(this.us_state);
        }

        if (target_type == "locality") {
          this.city = component.long_name;
          this.form.controls['address_city'].setValue(this.city);
        }

        if (target_type == "postal_code") {
          this.zip_code = component.long_name;
          this.form.controls['address_zip_code'].setValue(this.zip_code);
        }
        this.form.controls['address_street'].setValue((address.formatted_address).split(',')[0]);
        this.form.controls['full_address'].setValue((address.formatted_address));
        console.log("billing_address_address_line1 api ",address.formatted_address.split(',')[0]);
      })
    });

    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();

    this.form.controls['address_lat'].setValue(this.lat);
    this.form.controls['address_long'].setValue(this.lng);

    this.emitAddress();

  }

  changeDelivery(delivery: boolean) {
    this.delivery = delivery;
  }

  sendNewPickup() {
    let cart_calc = new CartCalculationModel(0);
    cart_calc.deliver = this.delivery ? 1 : 0;
    cart_calc.address = this.address_object;
    this.pickupEmitter.emit(cart_calc);
  }


  emitAddress() {
    this.line1 = this.form.controls['address_street'].value;
    this.full_address = this.form.controls['full_address'].value;
    this.line2 = this.form.controls['address_street2'].value;

    this.address_object = {
      lat: this.lat,
      long: this.lng,
      city: this.city,
      state: this.us_state_short_name,
      zipcode: this.zip_code,
      line1: this.line1,
      full_address:this.full_address
    };

    if (this.line2) {
      this.address_object['line2'] = this.line2;
    }

    this.addressEmitter.emit(this.address_object);
  }

  handleAddress2Change() {
    this.emitAddress();
  }


}
