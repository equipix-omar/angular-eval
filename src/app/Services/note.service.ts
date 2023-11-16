import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // ///////// NOTES // /////////
  getAllNote():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'AllNote' +"?remember_token=" +this.token)
  }
  getOneNote(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `GetNote/${id}`+"?remember_token=" +this.token);
  }
  addNewNote(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'AddpNote'+"?remember_token=" +this.token,formData);
  }
}
