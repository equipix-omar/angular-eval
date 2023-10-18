import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FilterOptionsSerializer} from "../../Serializers/ERP/filter.options.serializer";
import {FilterOptionsModel} from "../../models/classes/filter.options.model";

@Injectable({
  providedIn: 'root'
})

export class FilterOptionsApiService {

  serializer: FilterOptionsSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new FilterOptionsSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'filterOptions';
  }

  public get(filter: any = null): Observable<FilterOptionsModel> {
    const params: any = {};

    if (filter) {
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
    }).pipe(map((data: any) => this.serializer.fromJson(data) as FilterOptionsModel));
  }

}
