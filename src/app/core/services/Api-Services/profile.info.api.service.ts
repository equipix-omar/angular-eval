import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {LoginSerializer} from "../../Serializers/ERP/login.serializer";
import {LoginModel} from "../../models/classes/login.model";
 import { userResponseModel } from '../../models/classes/userReponse.model';
import { UserResponseSerializer } from '../../Serializers/ERP/userResponse.serializer';
import { ChangePwdSerializer } from '../../Serializers/ERP/changePwd.serializer';
import { changePwdModel } from '../../models/classes/changePwd.model';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {

  serializer: UserResponseSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;
  pwdEndpoint: string;
  pwdSerializer:ChangePwdSerializer;
  constructor(Http: HttpClient) {
    this.serializer = new UserResponseSerializer();
    this.pwdSerializer=new ChangePwdSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'users/profile';
    this.pwdEndpoint='users/reset/password';
  }

  public _getUserData(): Observable<userResponseModel> {
    return this.http
      .get<userResponseModel>(`${this.url}${this.endpoint}`)
     // .post<any>(`${this.url}${this.endpoint}`, this.serializer.toJson())
      .pipe(map((data:any) => this.serializer.fromJson(data) as userResponseModel));

  }
  public _updateUserData(item: userResponseModel): Observable<userResponseModel> {
    const formData = new FormData();
    formData.append('name', item.body.name);
    formData.append('phone', item.body.phone);
    // Add more form fields as needed
    return this.http
      .post<userResponseModel>(`${this.url}${this.endpoint}`, formData)
      .pipe(map(data => this.serializer.fromJson(data) as userResponseModel));
  }
  public _changeUserPwd(item: changePwdModel): Observable<changePwdModel> {
    return this.http
      .post<userResponseModel>(`${this.url}${this.pwdEndpoint}`, this.pwdSerializer.toJson(item))
      .pipe(map(data => this.pwdSerializer.fromJson(data) as changePwdModel));
  }
}
