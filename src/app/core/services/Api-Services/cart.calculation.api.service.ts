import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CartCalculationSerializer} from "../../Serializers/ERP/cart.calculation.serializer";
import {CartCalculationModel} from "../../models/classes/cart.calculation.model";

@Injectable({
  providedIn: 'root'
})

export class CartCalculationApiService {

  serializer: CartCalculationSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  private addressChangeSource = new BehaviorSubject(null);
  currentAddressSource = this.addressChangeSource.asObservable();

  constructor(Http: HttpClient) {
    this.serializer = new CartCalculationSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'cart/calculation';
  }


  public cartCalculation(item: CartCalculationModel): Observable<CartCalculationModel> {
    return this.http
      .post<CartCalculationModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as CartCalculationModel));
  }

  changeAddress(address: any) {
    this.addressChangeSource.next(address)
  }



}
