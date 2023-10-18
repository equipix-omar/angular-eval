import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CheckoutModel} from "../../models/classes/checkout.model";

export class CheckoutSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): CheckoutModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: CheckoutModel): any {
    let payload = {
      deliver: model.deliver,
      payment_data: model.payment_data,
      billing_address: model.billing_address,
    };

    if (model.deliver) {
      // @ts-ignore
      payload['address'] = model.address;
    }

    if (model.is_guest) {
      // @ts-ignore
      payload['email'] = model.email;
      // @ts-ignore
      payload['password'] = model.password;
      // @ts-ignore
      payload['phone'] = model.phone;
      // @ts-ignore
      payload['name'] = model.name;
    }

    return payload;
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): CheckoutModel {
    let model = new CheckoutModel(0);
    return model;
  }

  status(status: string): any {
    return {};
  }

}
