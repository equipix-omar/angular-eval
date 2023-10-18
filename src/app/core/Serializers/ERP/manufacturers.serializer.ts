import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CategoryModel} from "../../models/classes/category.model";
import {ManufacturersModel} from "../../models/classes/manufacturers.model";


export class ManufacturersSerializer extends BaseSerializer implements Serializer {

    fromJson(json: any): ManufacturersModel {
        return this.adapt(json.body);
    }

    fromJsonList(json: any): [] {
        return this.adaptList(json.body, json.pagination);
    }

    toJson(model: ManufacturersModel): any {
        return {
            name: model.name
        };
    }

    toFormData(fromData: any): FormData | null {
        return null;
    }

    public adapt(item: any): ManufacturersModel {
        let model = new ManufacturersModel(item?.id);
        model.name = item?.name;

        return model;
    }

    status(status :string): any {
        return {

        };
    }

}
