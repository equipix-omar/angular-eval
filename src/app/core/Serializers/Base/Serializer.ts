import {ModelBase} from '../../models/Base/base.model';

export interface Serializer {
	fromJson(json: any): ModelBase;

	fromJsonList(json: any):[];

	toJson(resource: ModelBase): any;

	status(status: string): any;

    toFormData(fromData: any):FormData | null;
}
