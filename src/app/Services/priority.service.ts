import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // /////////Project Priority // /////////
  getAllPriority():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'AllPriority' +"?remember_token=" +this.token)
  }
  addNewPriority(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'AddPriority',formData);
  }
  editPriority(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `EditPriority/${id}`,data);
  }
  deletePriority( id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `DeletePriority/${id}`,formData);
  }
  getOnePriority(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `GetPriority/${id}`+"?remember_token=" +this.token);
  }
}
