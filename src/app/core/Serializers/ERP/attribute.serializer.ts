import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {AttributeModel} from "../../models/classes/attribute.model";


export class AttributeSerializer extends BaseSerializer implements Serializer {

    fromJson(json: any): AttributeModel {
        return this.adapt(json.body);
    }

    fromJsonList(json: any): [] {
        return this.adaptList(json.body, json.pagination);
    }

    toJson(model: AttributeModel): any {
        return {};
    }

    toFormData(fromData: any): FormData | null {
        return null;
    }

    public adapt(item: any): AttributeModel {
        let model = new AttributeModel(item.id);
        model.name = item.name;
        model.type = item.type;
        model.values = item.values;
        model.description = item.description;

        return model;
    }

    status(status :string): any {
        return {

        };
    }

}
