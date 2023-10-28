import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  baseURL= AppComponent.baseURL
  token:any
  id:any
  constructor(private _HttpClient:HttpClient) {
    this.token = localStorage.getItem('TOKEN');
    this.id    = localStorage.getItem('UserId');
  }
  /** --------------------------------------------------------------- **/
  getpermision(data: any):Observable<any>
  {
  return  this._HttpClient.post(this.baseURL+'Allpermisions',data)
  }
/** --------------------------------------------------------------- **/
/** --------------------------------------------------------------- **/
  getAllrole():Observable<any>
  {
    return this._HttpClient.get(this.baseURL + 'roles' + "?remember_token=" +this.token)
  }
  addRole(formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + 'Addrole',formData);
  }
  editRole(id:any,data:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `Editrole/${id}`,data);
  }
  deleteRole( id:any,formData:any):Observable<any> {
    return this._HttpClient.post(this.baseURL + `Deleterole/${id}`,formData);
  }
  getOneRole(id:any):Observable<any> {
    return this._HttpClient.get(this.baseURL + `Getrole/${id}`+"?remember_token=" +this.token);
  }
/** --------------------------------------------------------------- **/
/** --------------------------------------------------------------- **/
storePivotData(formData:any):Observable<any> {
  return this._HttpClient.post(this.baseURL + 'storePivotData',formData);
}
deletePivotData(formData:any):Observable<any> {
  return this._HttpClient.post(this.baseURL + 'deletePivotData',formData);
}
/** --------------------------------------------------------------- **/
/** --------------------------------------------------------------- **/
getAllpermision():Observable<any>
{
  return this._HttpClient.get(this.baseURL + 'permision' + "?remember_token=" +this.token)
}
addpermision(formData:any):Observable<any> {
  return this._HttpClient.post(this.baseURL + 'Addpermision',formData);
}
editpermision(id:any,data:any):Observable<any> {
  return this._HttpClient.post(this.baseURL + `Editpermision/${id}`,data);
}
deletepermision( id:any,formData:any):Observable<any> {
  return this._HttpClient.post(this.baseURL + `Deletepermis/${id}`,formData);
}
getOnepermision(id:any):Observable<any> {
  return this._HttpClient.get(this.baseURL + `Getpermision/${id}`+"?remember_token=" +this.token);
}
/** --------------------------------------------------------------- **/
/** --------------------------------------------------------------- **/
}
