import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // /////////Project sector // /////////
  Allmanagement():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'Allmanagement' +"?remember_token=" +this.token)
  }
  Addmanagement(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'Addmanagement',formData);
  }
  Editmanagement(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `Editmanagement/${id}`,data);
  }
  deletmanagement( id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `deletmanagement/${id}`,formData);
  }
  Getmanagement(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `Getmanagement/${id}`+"?remember_token=" +this.token);
  }
}
