import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {CategorySerializer} from "../../Serializers/ERP/category.serializer";
import {CategoryModel} from "../../models/classes/category.model";

@Injectable({
    providedIn: 'root'
})

export class CategoryApiService extends BaseService<CategoryModel> {
    constructor(Http: HttpClient) {
        super(
            Http,
            environment.url(),
            'categories',
            new CategorySerializer());
    }
}
