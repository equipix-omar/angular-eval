import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
  // /////////Project Status // /////////
  getAllStatus():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'project/AllStatus' +"?remember_token=" +this.token)
  }
  addNewProjectStatus(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'project/AddStatus',formData);
  }
  editProjectStatus(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `project/EditStatus/${id}`,data);
  }
  deleteProjectStatus( id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `project/DeleteStatus/${id}`,formData);
  }
  getOneProjectStatus(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `project/GetStatus/${id}`+"?remember_token=" +this.token);
  }
   // /////////TaskS Status // /////////
   getAllTaskStatus():Observable<any>
   {
     return this._HttpClient.get(this.baseURL+'task/AllStatus' +"?remember_token=" +this.token)
   }
   addNewTaskStatus(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'task/AddStatus',formData);
  }
  editTaskStatus(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `task/EditStatus/${id}`,data);
  }
  deleteTaskStatus(id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `task/DeleteStatus/${id}`,formData);
  }
  getOneTaskStatus(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `task/GetStatus/${id}`+"?remember_token=" +this.token);
  }
}
