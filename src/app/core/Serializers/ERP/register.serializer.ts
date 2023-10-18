import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {RegisterModel} from "../../models/classes/register.model";

export class RegisterSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): RegisterModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: RegisterModel): any {
    return {
      email: model.email,
      password: model.password,
      name: model.name,
      phone: model.phone,
    };
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): RegisterModel {
    if (!item) {
      return new RegisterModel(0);
    }

    let model = new RegisterModel(item.id);
    model.token = item.token;
    model.expire_at = item.expire_at;
    model.name = item.name;
    model.email = item.email;
    model.phone = item.phone;
    model.joining_date = item.joining_date;
    model.activity_codes = item.activity_codes;

    return model;
  }

  status(status: string): any {
    return {};
  }

}
