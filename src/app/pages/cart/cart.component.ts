import {Component, OnInit} from '@angular/core';
import {CartModel} from "../../core/models/classes/cart.model";
import {CartApiService} from "../../core/services/Api-Services/cart.api.service";
import {ToastrService} from "ngx-toastr";
import {DatePipe} from "@angular/common";
import {CartItemsModel} from "../../core/models/classes/cart.items.model";
import {CartCalculationModel} from "../../core/models/classes/cart.calculation.model";
import {CartCalculationApiService} from "../../core/services/Api-Services/cart.calculation.api.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {

  cartModel: CartModel [] = [];
  total: number = 0;
  isLoaded = false;

  cart_calculation!: CartCalculationModel;

  // totalForItem:Number;
  constructor(
    private cartApiService: CartApiService,
    private cartCalculationApiService:CartCalculationApiService,
    private toastService: ToastrService
  ) {}


  ngOnInit(): void {
    this.loadCheckout();
  }

  private loadCheckout() {
    this.getCartItems();
    this.getCartCalculation();
  }

  getCartItems() {
    this.cartApiService.list().subscribe({
      next: (resp) => {
        this.cartModel = resp;
        this.isLoaded = true;
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Cart List');
      }
    })
  }

  getCartCalculation(){
    let cart_calc = new CartCalculationModel(0);
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

  minus(quantity: any, cart: any) {
    if (quantity > 1) {
      quantity--;
      this.updateCartAPI(cart, quantity);
    }
  }

  plus(quantity: any, cart: any) {
    quantity++;
    this.updateCartAPI(cart, quantity);
  }

  updateStartDate(cart_item: any, event: any, end_date_object: any) {
    let start_date = event.target.value;
    let end_date = end_date_object.value;

    console.log(end_date.value);

    this.updateCartAPI(cart_item, cart_item.quantity, start_date, end_date);
  }

  updateEndDate(cart_item: any, event: any, start_date_object: any) {
    let end_date = event.target.value;
    let start_date = start_date_object.value;

    this.updateCartAPI(cart_item, cart_item.quantity, start_date, end_date);
  }

  /*remove clicked item from cart*/
  removeItem(id: number) {
    this.cartApiService.delete(id).subscribe({
      next: (resp) => {
        this.loadCheckout();
        this.toastService.success('Deleting the item');
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Delete To Cart');
      },
    });
  }

  updateCartAPI(cart: any, quantity: any = null, start_date = null, end_date = null) {
    let datePipe = new DatePipe('en-US');
    let cart_item = new CartItemsModel(cart.product.id);

    let item_start_date = start_date ? start_date : cart.start_date;
    let item_emd_date = end_date ? end_date : cart.end_date;

    cart_item.start_date = datePipe.transform(item_start_date, 'Y-MM-dd');
    cart_item.end_date = datePipe.transform(item_emd_date, 'Y-MM-dd');
    cart_item.cart_item_id = cart.id;

    if (quantity) {
      cart_item.quantity = quantity;
    }

    let cartModel = new CartModel(0);
    cartModel.items = [];
    cartModel.items.push(cart_item);

    this.cartApiService.addToCart(cartModel).subscribe(
      {
        next: (resp) => {
          this.getCartCalculation();
          this.cartModel = resp;
          this.toastService.success('Updating the Cart');
        },
        error: (error) => {
          let error_message = error?.error?.message;
          this.toastService.error(error_message, 'Add To Cart');
        },
      });

  }

}
