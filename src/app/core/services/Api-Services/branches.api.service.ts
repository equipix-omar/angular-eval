import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {BranchesSerializer} from "../../Serializers/ERP/branches.serializer";
import {BranchesModel} from "../../models/classes/branches.model";

@Injectable({
    providedIn: 'root'
})

export class BranchesApiService extends BaseService<BranchesModel> {
    constructor(Http: HttpClient) {
        super(
            Http,
            environment.url(),
            'admins/branches',
            new BranchesSerializer());
    }
}
