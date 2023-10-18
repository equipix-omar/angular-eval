import {ModelBase} from "../Base/base.model";


export class CartItemsModel extends ModelBase {

  // basic-form
  public quantity!: number;
  public start_date!: any;
  public end_date!: any;
  public cart_item_id!: boolean;
  public lat!: number;
  public long!: number;


  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      'quantity': this.quantity,
      'start_date': this.start_date,
      'end_date': this.end_date,
      'cart_item_id' : this.cart_item_id
    };
  }

}
