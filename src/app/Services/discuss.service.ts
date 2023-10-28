import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DiscussService {
  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // ///////// Discuss // /////////
  getAllDiscuss():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'AllDiscus' +"?remember_token=" +this.token)
  }
  getOneDiscus(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `GetDiscus/${id}`+"?remember_token=" +this.token);
  }
  addNewDiscus(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'AddDiscus'+"?remember_token=" +this.token,formData);
  }
}
