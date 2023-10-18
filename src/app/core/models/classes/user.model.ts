import {ModelBase} from "../Base/base.model";


export class UserModel extends ModelBase {

  // basic-form
  public token!: string;
  public expire_at!: string;
  public name!: string;
  public email!: string;

  // price-form
  public phone!: string;
  public joining_date!: string;


  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
    };
  }

}
