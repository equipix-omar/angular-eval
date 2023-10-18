import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CartCalculationModel} from "../../../core/models/classes/cart.calculation.model";
import {CartCalculationApiService} from "../../../core/services/Api-Services/cart.calculation.api.service";
import {ToastrService} from "ngx-toastr";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../../core/services/token-storage.service";
import {CheckoutModel} from "../../../core/models/classes/checkout.model";
import {CheckoutApiService} from "../../../core/services/Api-Services/checkout.api.service";
import {CartApiService} from "../../../core/services/Api-Services/cart.api.service";
import {CartModel} from "../../../core/models/classes/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = 20.728218;
  latitude = 52.128973;
  public overviewColleaps = true;
  public amenitiesColleaps = true;

  cart_calculation!: CartCalculationModel;
  form!: UntypedFormGroup;
  submitted: boolean = false;

  address_object: any = {
    lat: null,
    long: null,
    city: null,
    state: null,
    zipcode: null,
    line1: null,
    full_address:null
  };

  agree_conditions: boolean = false;
  cartModel: CartModel [] = [];

  success_checkout: number = 0;
  constructor(private modalService: NgbModal,
              private cartCalculationApiService: CartCalculationApiService,
              private tokenStorageService: TokenStorageService,
              private formBuilder: UntypedFormBuilder,
              private router: Router,
              private cartApiService: CartApiService,
              private checkoutApiService: CheckoutApiService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.getCartItems();

    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      {label: 'Home', link: ''},
      {label: 'Checkout', active: true}
    ];

    this.generateFormBuilder();
  }

  getCartItems() {
    this.cartApiService.list().subscribe({
      next: (resp) => {
        this.cartModel = resp;
        // if (!this.cartModel.length){
        //   this.router.navigate(['/']).then();
        // }
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Cart List');
      }
    })
  }

  inView(ele: any) {
    ele.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  }


  pickupEvent(cart_calc: CartCalculationModel) {
    this.cartCalculationApiService.cartCalculation(cart_calc).subscribe({
      next: (resp) => {
        this.cart_calculation = resp;
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Cart List');
      }
    });
  }

  checkIsGuest() {
    let is_guest = this.tokenStorageService.getIsGuest();
    if (is_guest == '1') {
      return 1;
    }
    return 0;
  }


  generateFormBuilder() {
    let is_guest = this.checkIsGuest();
    this.form = this.formBuilder.group({
      // guest users
      first_name: is_guest ? ['', Validators.required] : [''],
      last_name: is_guest ? ['', Validators.required] : [''],
      email: is_guest ? ['', Validators.required] : [''],
      phone: is_guest ? ['', Validators.required] : [''],
      password: is_guest ? ['', Validators.required] : [''],

      deliver: ['1', Validators.required],

      // deliver address
      address_street: ['', Validators.required],
      full_address: [''],
      address_lat: ['', Validators.required],
      address_long: ['', Validators.required],
      address_city: ['', Validators.required],
      address_state: ['', Validators.required],
      address_zip_code: ['', Validators.required],
      address_street2: [''],

      billing_address_address_line1: ['', Validators.required],
      billing_address_address_line2: [''],
      billing_address_city: ['', Validators.required],
      billing_address_state: ['', Validators.required],
      billing_address_zip_code: ['', Validators.required],

      payment_data_card_number: ['', Validators.required],
      payment_data_card_name: ['', Validators.required],
      payment_data_exp_month: ['', Validators.required],
      payment_data_exp_year: ['', Validators.required],
      payment_data_cvc: ['', Validators.required],

    });
  }


  submit() {
    let model = this.prepareCheckoutModel();

    this.checkoutApiService.checkout(model).subscribe(
      {
        next: (resp) => {
          this.success_checkout = 1;
          this.toastService.success('Adding Order Successfully', 'Checkout');
          if (model.is_guest){
            this.tokenStorageService.saveIsGuest('0')
          }
        },
        error: (error) => {
          let error_message = error?.error?.message;
          this.toastService.error(error_message, 'Checkout');
        },
      });
  }


  prepareCheckoutModel() {
    let model = new CheckoutModel(0);
    model.is_guest = this.checkIsGuest();
    model.deliver = this.form.get('deliver')?.value;

    if (model.is_guest) {
      model.name = this.form.get('first_name')?.value + ' ' + this.form.get('last_name')?.value;
      model.email = this.form.get('email')?.value;
      model.password = this.form.get('password')?.value;
      model.phone = this.form.get('phone')?.value;
    }

    if (model.deliver) {
      model.address = this.address_object;
    }

    model.payment_data = {
      card_number: this.form.get('payment_data_card_number')?.value,
      card_name: this.form.get('payment_data_card_name')?.value,
      exp_month: this.form.get('payment_data_exp_month')?.value,
      exp_year: this.form.get('payment_data_exp_year')?.value,
      cvc: this.form.get('payment_data_cvc')?.value
    };

    model.billing_address = {
      address_line1: this.form.get('billing_address_address_line1')?.value.split(',')[0],
      address_line2: this.form.get('billing_address_address_line2')?.value,
      full_address: this.form.get('billing_address_address_full')?.value,
      city: this.form.get('billing_address_city')?.value,
      state: this.form.get('billing_address_state')?.value,
      zip: this.form.get('billing_address_zip_code')?.value
    };

    return model;
  }

  addressEvent(address: any) {
    this.address_object = address;
    console.log("address_object api ",address);

    this.cartCalculationApiService.changeAddress(this.address_object);
  }

}
