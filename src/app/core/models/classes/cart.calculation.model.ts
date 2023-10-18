import {ModelBase} from "../Base/base.model";
import {CartModel} from "./cart.model";

export class CartCalculationModel extends ModelBase {

  // items
  public items!: CartModel;

  // get
  public total_price!: number;
  public delivery_price!: number;
  public vat!: number;
  public tax_rate!: number;
  public tax_value!: number;
  public final_total_price!: number;

  //
  public deliver!: number;
  public address!: {
    lat: number,
    long: number,
    state: string,
    city: string,
    zipcode: string,
  };

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      'items': this.items,
      'total_price': this.total_price,
      'delivery_price': this.delivery_price,
      'vat': this.vat,
      'tax_rate': this.tax_rate,
      'final_total_price': this.final_total_price,
      'tax_value' : this.tax_value
    };
  }

}
