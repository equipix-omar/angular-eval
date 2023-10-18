import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {OrderItemModel} from "../../models/classes/order.item.model";
import {OrderItemModelSerializer} from "../../Serializers/ERP/orderItem.serialization";

@Injectable({
  providedIn: 'root'
})

export class OrderApiService {

  serializer: OrderItemModelSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;
  constructor(Http: HttpClient) {
    this.serializer = new OrderItemModelSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'orders';
  }

  public _getAllOrdersData(): Observable<OrderItemModel> {
    return this.http
      .get<OrderItemModel>(`${this.url}${this.endpoint}`)
       .pipe(map((data:any) => this.serializer.fromJson(data) as OrderItemModel));

  }
  /*public _updateUserData(item: userResponseModel): Observable<userResponseModel> {
    return this.http
      .post<userResponseModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as userResponseModel));
  }*/

}
