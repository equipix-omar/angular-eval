import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CartModel} from "../../models/classes/cart.model";
import {CheckoutSerializer} from "../../Serializers/ERP/checkout.serializer";
import {CheckoutModel} from "../../models/classes/checkout.model";

@Injectable({
  providedIn: 'root'
})

export class CheckoutApiService {

  serializer: CheckoutSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new CheckoutSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'checkout';
  }

  public checkout(item: CheckoutModel): Observable<CheckoutModel> {
    return this.http
      .post<CartModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as CheckoutModel));
  }


}
