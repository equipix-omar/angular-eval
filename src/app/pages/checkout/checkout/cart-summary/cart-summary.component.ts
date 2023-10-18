import {Component, Input, OnInit} from '@angular/core';
import {CartCalculationModel} from "../../../../core/models/classes/cart.calculation.model";
import {CartApiService} from "../../../../core/services/Api-Services/cart.api.service";
import {CartCalculationApiService} from "../../../../core/services/Api-Services/cart.calculation.api.service";
import {ToastrService} from "ngx-toastr";
import {CartModel} from "../../../../core/models/classes/cart.model";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  @Input() cartModel: CartModel [] = [];
  cart_calculation!: CartCalculationModel;

  constructor(private cartApiService: CartApiService,
              private cartCalculationApiService:CartCalculationApiService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.getCartCalculation();
    this.subscribeOnAddress();
  }

  getCartItems() {
    this.cartApiService.list().subscribe({
      next: (resp) => {
        this.cartModel = resp;
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Cart List');
      }
    })
  }

  getCartCalculation(address = null) {
    let cart_calc = new CartCalculationModel(0);
    if (address) {
      cart_calc.address = address;
    }
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


  subscribeOnAddress() {
    this.cartCalculationApiService.currentAddressSource.subscribe(address => {
      if (address) {
        this.getCartCalculation(address);
      }
    });
  }

}
