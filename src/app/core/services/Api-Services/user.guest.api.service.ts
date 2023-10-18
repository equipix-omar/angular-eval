import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserGuestSerializer} from "../../Serializers/ERP/user.guest.serializer";
import {UserModel} from "../../models/classes/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserGuestApiService {

  serializer: UserGuestSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;

  constructor(Http: HttpClient) {
    this.serializer = new UserGuestSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'users/guest';
  }

  public createGuest(): Observable<UserModel> {
    return this.http
      .get(`${this.url}${this.endpoint}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as UserModel));
  }
}
