import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {UserModel} from "../../models/classes/user.model";

export class UserGuestSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): UserModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: UserModel): any {
    return {};
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): UserModel {
    if (!item) {
      return new UserModel(0);
    }

    let model = new UserModel(item.id);
    model.token = item.token;
    model.expire_at = item.expire_at;
    model.name = item.name;
    model.email = item.email;
    model.phone = item.phone;
    model.joining_date = item.joining_date;

    return model;
  }

  status(status: string): any {
    return {};
  }

}
