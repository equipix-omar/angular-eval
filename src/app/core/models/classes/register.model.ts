import {ModelBase} from "../Base/base.model";

export class RegisterModel extends ModelBase {

  public email!: string;
  public password!: string;

  // basic-form
  public token!: string;
  public expire_at!: string;
  public name!: string;

  // price-form
  public phone!: string;
  public joining_date!: string;
  public activity_codes!: [];

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
    };
  }

}
