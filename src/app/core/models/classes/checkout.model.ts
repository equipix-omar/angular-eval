import {ModelBase} from "../Base/base.model";

export class CheckoutModel extends ModelBase {

  public deliver!: boolean;
  public address!: {
    lat: number,
    long: number,
    city: string,
    state: string,
    zipcode: string
  };
  public payment_data!: {
    card_number: string,
    card_name: string,
    exp_month: string,
    exp_year: string,
    cvc: string
  };

  public billing_address!: {
    address_line1: string,
    address_line2: string,
    full_address: string,
    city: string,
    state: string,
    zip: string
  };


  public email!: string;
  public password!: string;
  public name!: string;
  public phone!: string;

  public is_guest!: number;

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
    };
  }

}
