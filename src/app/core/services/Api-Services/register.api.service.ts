import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RegisterSerializer} from "../../Serializers/ERP/register.serializer";
import {RegisterModel} from "../../models/classes/register.model";

@Injectable({
  providedIn: 'root'
})

export class RegisterApiService {

  serializer: RegisterSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new RegisterSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'users/register';
  }

  public register(item: RegisterModel): Observable<RegisterModel> {
    return this.http
      .post<RegisterModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as RegisterModel));
  }
}
