import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL= AppComponent.baseURL
  token:any
  id:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
    this.id    = localStorage.getItem('UserId');
  }
  signUp(data: any): Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'handle-register',data)
  }
  signIn(data: any):Observable<any>
  {
  return  this._HttpClient.post(this.baseURL+'handle-login',data)
  }
  signOut(data: any):Observable<any>
  {
   return this._HttpClient.post(this.baseURL+'logout',data)
  }
  isLoggedIn()
  {
  return !!localStorage.getItem('TOKEN')
  }

  getAllUser():Observable<any>
  {
    return this._HttpClient.get(this.baseURL + 'Users' + "?remember_token=" +this.token)
  }
  getAllMembers():Observable<any>
  {
    return this._HttpClient.get(this.baseURL + 'Members' + "?remember_token=" +this.token)
  }
  getAllEmployees():Observable<any>
  {
    return this._HttpClient.get(this.baseURL + 'Employees' + "?remember_token=" +this.token)
  }
  getOneUser(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `GetUser/${id}`+"?remember_token=" +this.token);
  }
  editUser(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `EditUser/${id}`+"?remember_token=" +this.token,data);
  }
  EditProfile(data:any):Observable<any> {
    const formData = new FormData();
    formData.append("image", data, data.name);

    return this._HttpClient.post(this.baseURL + `EditProfile/${this.id}`+"?remember_token=" +this.token,formData);
  }
  deleteUser(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `DeleteUser/${id}`,data);
  }
  AddUser(data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `AddUser`+"?remember_token=" +this.token,data);
  }
  AddEmployee(data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `AddEmployee`+"?remember_token=" +this.token,data);
  }
  AddMember(data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `AddMember`+"?remember_token=" +this.token,data);
  }
/** --------------------------------------------------------------- **/
}
