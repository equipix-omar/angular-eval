import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CartSerializer} from "../../Serializers/ERP/cart.serializer";
import {CartModel} from "../../models/classes/cart.model";

@Injectable({
  providedIn: 'root'
})

export class CartApiService {

  serializer: CartSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new CartSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'cart';
  }

  public addToCart(item: CartModel): Observable<CartModel[]> {
    return this.http
      .post<CartModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJsonList(data) as CartModel[]));
  }

  public list(): Observable<CartModel[]> {
    const params: any = {};
    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as CartModel[]));
  }

  public delete(id: number) {
    return this.http
      .delete(`${this.url}${this.endpoint}/${id}`);
  }

}
