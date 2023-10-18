import {ModelBase} from "../Base/base.model";
import {CartItemsModel} from "./cart.items.model";
import {ProductsModel} from "./product.model";


export class CartModel extends ModelBase {

  // items
  public items!: CartItemsModel[];

  // get
  public product!: ProductsModel;
  public quantity!: number;
  public start_date!: string;
  public end_date!: string;
  public price!: string;

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      'product': this.product,
      'quantity': this.quantity,
      'price': this.price,
      'start_date': this.start_date,
      'end_date': this.end_date,
    };
  }

}
