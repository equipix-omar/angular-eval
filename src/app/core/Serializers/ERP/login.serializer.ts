import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {LoginModel} from "../../models/classes/login.model";

export class LoginSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): LoginModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: LoginModel): any {
    return {
      email: model.email,
      password: model.password
    };
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): LoginModel {
    if (!item) {
      return new LoginModel(0);
    }

    let model = new LoginModel(item.id);
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
