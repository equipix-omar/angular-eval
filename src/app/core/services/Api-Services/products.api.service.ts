import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ProductsSerializer} from "../../Serializers/ERP/products.serializer";
import {ProductsModel} from "../../models/classes/product.model";
import {PaginateParams} from "../../models/paginateParams.interface";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProductsApiService {

  serializer: ProductsSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new ProductsSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'products';
  }

  public get(id: any, get_all: boolean = true): Observable<ProductsModel> {
    const headerDict: any = {
      'Accept-Language': (get_all) ? 'all' : localStorage.getItem('cms_lang'),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http
      .get(`${this.url}${this.endpoint}/${id}`, requestOptions)
      .pipe(map((data: any) => this.serializer.fromJson(data) as ProductsModel));
  }

  public list(paginationParams: PaginateParams,
              filter: any = null,
              paginate = 1): Observable<ProductsModel[]> {
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

    if (filter){
      if (filter.categories) {
        let categories = filter.categories.split(',');
        categories = categories.join(',');
       params.category_id = categories;
      }
      if (filter.accept_bid_requests) {
        params.accept_bid_requests = filter.accept_bid_requests;
      }
      if (filter.attributes) {
        let attributes = filter.attributes.split(',');
        attributes = attributes.join(',');
       // params.attributes = attributes;
      }
      if (filter.latitude) {
        params.lat = filter.latitude;
      }
      if (filter.longitude) {
        params.long = filter.longitude;
      }
      if (filter.start_date) {
        params.start_date = filter.start_date;
      }
      if (filter.end_date) {
        params.end_date = filter.end_date;
      }
    }

    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as ProductsModel[]));
  }
}
