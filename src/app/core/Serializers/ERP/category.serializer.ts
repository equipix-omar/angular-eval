import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CategoryModel} from "../../models/classes/category.model";


export class CategorySerializer extends BaseSerializer implements Serializer {

    fromJson(json: any): CategoryModel {
        return this.adapt(json.body);
    }

    fromJsonList(json: any): [] {
        return this.adaptList(json.body, json.pagination);
    }

    toJson(model: CategoryModel): any {
        return {};
    }

    toFormData(fromData: any): FormData | null {
        return null;
    }

    public adapt(item: any): CategoryModel {
        let model = new CategoryModel(item.id);
        model.name = item.name;
        model.parent_id = item.parent_id;
        model.parent = item.parent;
        model.children = item.children;
        model.image = item.image;

        return model;
    }

    status(status :string): any {
        return {

        };
    }

}
