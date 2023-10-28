import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // /////////Project sector // /////////
  Allsector():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'Allsector' +"?remember_token=" +this.token)
  }
  Addsector(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'Addsector',formData);
  }
  Editsector(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `Editsector/${id}`,data);
  }
  deletsector( id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `deletsector/${id}`,formData);
  }
  Getsector(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `Getsector/${id}`+"?remember_token=" +this.token);
  }
}
