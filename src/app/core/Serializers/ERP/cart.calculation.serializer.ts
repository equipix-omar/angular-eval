import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CartModel} from "../../models/classes/cart.model";
import {CartCalculationModel} from "../../models/classes/cart.calculation.model";

export class CartCalculationSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): CartCalculationModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: CartCalculationModel): any {
    let object_json = {};

    if (model.deliver){
      // @ts-ignore
      object_json['deliver'] = model.deliver;
    }

    if (model.address){
      // @ts-ignore
      object_json['address'] = model.address;
    }

    return object_json;
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): CartCalculationModel {
    if (!item) {
      return new CartCalculationModel(0);
    }
    let model = new CartCalculationModel(item.id);
    model.items = item.items;
    model.total_price = item.total_price;
    model.delivery_price = item.delivery_price;
    model.vat = item.vat;
    model.tax_rate = item.tax_rate;
    model.tax_value = item.tax_value;
    model.final_total_price = item.final_total_price;
    return model;
  }

  status(status: string): any {
    return {};
  }

}
