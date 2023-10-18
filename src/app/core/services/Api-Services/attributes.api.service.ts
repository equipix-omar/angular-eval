import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {AttributeSerializer} from "../../Serializers/ERP/attribute.serializer";
import {AttributeModel} from "../../models/classes/attribute.model";
import {PaginateParams} from "../../models/paginateParams.interface";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AttributesApiService extends BaseService<AttributeModel> {
  constructor(Http: HttpClient) {
    super(
      Http,
      environment.url(),
      'attributes',
      new AttributeSerializer());
  }

  public override list(paginationParams: PaginateParams,
                       filter: any = null,
                       paginate = 1): Observable<AttributeModel[]> {
    const params: any = {};
    if (paginationParams) {
      if (paginationParams.search_key) {
        params['search_key'] = paginationParams.search_key;
      }
      if (paginationParams.active) {
        params['is_active'] = paginationParams.active;
      }
      if (paginationParams.per_page) {
        params['per_page'] = paginationParams.per_page;
      }
      if (paginationParams.sort_order) {
        params['sort_order'] = paginationParams.sort_order;
      }
      if (paginationParams.next_page_index) {
        params['page'] = paginationParams.next_page_index + 1;
      }
      if (paginate) {
        params['is_pagination'] = 1;
      }
    }

    if (filter) {
      if (filter.categories) {
        let categories = filter.categories.split(',');
        categories = categories.join(',');
        params.categories_id = categories;
      }
    }

    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as AttributeModel[]));
  }

}
