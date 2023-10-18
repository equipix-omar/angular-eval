import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ManufacturersSerializer} from "../../Serializers/ERP/manufacturers.serializer";
import {ManufacturersModel} from "../../models/classes/manufacturers.model";

@Injectable({
    providedIn: 'root'
})

export class ManufacturersApiService extends BaseService<ManufacturersModel> {
    constructor(Http: HttpClient) {
        super(
            Http,
            environment.url(),
            'admins/manufacturers',
            new ManufacturersSerializer());
    }
}
