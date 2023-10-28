import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
    getAllProject():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllProject' +"?remember_token=" +this.token )
    }
    addNewProject(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddProject',data);
    }
    getOneProject(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetProject/${id}`+"?remember_token=" +this.token);
    }
    editProject(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditProject/${id}`,data);
    }
    deleteProject( id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `DeleteProject/${id}`,formData);
    }
    /** --------------------------------------------------------------- **/
    storePivotData2(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'storePivotData2',formData);
    }
    /** --------------------------------------------------------------- **/
    storePivotData3(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'storePivotData3',formData);
    }
    getOnemanagement(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `Getmanagementpr/${id}`+"?remember_token=" +this.token);
    }
}
