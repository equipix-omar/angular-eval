import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // ///////// Files // /////////
  getAllFile():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'AllFile' +"?remember_token=" +this.token)
  }
  getOneFile(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `GetFile/${id}`+"?remember_token=" +this.token);
  }
  addNewFile(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'AddFile'+"?remember_token=" +this.token,formData);
  }
}
