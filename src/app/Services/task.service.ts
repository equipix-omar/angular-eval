import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
    getAllTask():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllTask'+"?remember_token=" +this.token)
    }
    addNewTask(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddTask',formData);
    }
    getOneTask(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetTask/${id}`+"?remember_token=" +this.token);
    }
    editTask(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditTask/${id}`,data);
    }
    deleteTask( id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `DeleteTask/${id}`,formData);
    }



}
