import {ModelBase} from "../Base/base.model";


export class FilterOptionsModel extends ModelBase {

  public min_price!: number;
  public max_price!: number;


  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,

      'min_price': this.min_price,
      'max_price': this.max_price,
    };
  }

}
