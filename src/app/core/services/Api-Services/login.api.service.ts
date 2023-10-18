import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {LoginSerializer} from "../../Serializers/ERP/login.serializer";
import {LoginModel} from "../../models/classes/login.model";

@Injectable({
  providedIn: 'root'
})

export class LoginApiService {

  serializer: LoginSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new LoginSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'users/login';
  }

  public login(item: LoginModel): Observable<LoginModel> {
    return this.http
      .post<LoginModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as LoginModel));
  }
}
