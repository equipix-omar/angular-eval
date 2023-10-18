import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CartModel} from "../../models/classes/cart.model";

export class CartSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): CartModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: CartModel): any {
    return {
      products: model.items
    };
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): CartModel {
    if (!item) {
      return new CartModel(0);
    }

    let model = new CartModel(item.id);
    model.product = item.product;
    model.quantity = item.quantity;
    model.price = item.price;
    model.start_date = item.start_date;
    model.end_date = item.end_date;
    return model;
  }

  status(status: string): any {
    return {};
  }

}
