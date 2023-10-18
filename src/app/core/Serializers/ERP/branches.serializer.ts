import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {BranchesModel} from "../../models/classes/branches.model";


export class BranchesSerializer extends BaseSerializer implements Serializer {

    fromJson(json: any): BranchesModel {
        return this.adapt(json.body);
    }

    fromJsonList(json: any): [] {
        return this.adaptList(json.body, json.pagination);
    }

    toJson(model: BranchesModel): any {

        let model_data = {
            name: model?.name,
            phone: model?.phone,
            business_type_id: model?.business_type_id,
            is_main: model?.is_main,
            status: model?.status,
            line1: model?.address?.line1,
            city: model?.address?.city,
            state: model?.address?.state,
            zip: model?.address?.zip,
        };

        if (model?.address?.line2) {
            // @ts-ignore
            model_data['line2'] = model?.address?.line2;
        }

        return model_data;
    }

    toFormData(fromData: any): FormData | null {
        return null;
    }

    public adapt(item: any): BranchesModel {
        let model = new BranchesModel(item?.id);
        model.name = item?.name;
        model.phone = item?.phone;
        model.business_type_id = item?.business_type_id;
        model.is_main = item?.is_main;
        model.status = item?.status;
        model.address = item?.address;
        model.status_label = item?.status ? 'ACTIVE' : 'BLOCK';
        return model;
    }

    status(status: string): any {
        return {};
    }

}
