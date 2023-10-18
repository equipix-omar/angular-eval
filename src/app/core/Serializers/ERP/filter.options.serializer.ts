import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {FilterOptionsModel} from "../../models/classes/filter.options.model";


export class FilterOptionsSerializer extends BaseSerializer implements Serializer {

  fromJson(json: any): FilterOptionsModel {
    return this.adapt(json.body);
  }

  fromJsonList(json: any): [] {
    return this.adaptList(json.body, json.pagination);
  }

  toJson(model: FilterOptionsModel): any {
    return {
    };
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): FilterOptionsModel {
    if (!item) {
      return new FilterOptionsModel(0);
    }

    let model = new FilterOptionsModel(item.id);
    model.min_price = item.min_price;
    model.max_price = item.max_price;

    return model;
  }

  status(status: string): any {
    return {};
  }

}
