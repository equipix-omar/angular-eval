import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL= AppComponent.baseURL
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('TOKEN');
  }
    getAllEvents():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+`AllEvents`)
    }
    getAllEvent(id:any):Observable<any>
    {
      return this._HttpClient.get(this.baseURL+`AllEvent/${id}`)
    }
    editEvent(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditEvent`,data);
    }
    AddEvent(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `AddEvent`,data);
    }

    editEventres(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditEventres`,data);
    }
    AddEventres(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `AddEventres`,data);
    }
    deleteEvent(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteEvent`,data);
    }
    deleteoneEvent(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteoneEvent/${id}`,formData);
    }
//|-----------------------------------------------------------------------|
    getAllNote(id:any):Observable<any>
    {
      return this._HttpClient.get(this.baseURL+`AllNote/${id}`)
    }
    editNote(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditNote`,data);
    }
    AddNote(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `AddNote`,data);
    }
    deleteNote(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteNote`,data);
    }
    deleteoneNote(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteoneNote/${id}`,formData);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    getAllNote2(id:any):Observable<any>
    {
      return this._HttpClient.get(this.baseURL+`AllNote2/${id}`)
    }
    editNote2(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditNote2`,data);
    }
    AddNote2(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `AddNote2`,data);
    }
    deleteNote2(data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteNote2`,data);
    }
    deleteoneNote2(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deleteoneNote2/${id}`,formData);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllRisk():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllRisk' +"?remember_token=" +this.token)
    }
    addNewRisk(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddRisk',formData);
    }
    editRisk(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditRisk/${id}`,data);
    }
    deleteRisk(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletRisk/${id}`,formData);
    }
    getOneRisk(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetRisk/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllImpact():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllImpact' +"?remember_token=" +this.token)
    }
    addNewImpact(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddImpact',formData);
    }
    editImpact(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditImpact/${id}`,data);
    }
    deleteImpact(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletImpact/${id}`,formData);
    }
    getOneImpact(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetImpact/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllOccurrence():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllOccurrence' +"?remember_token=" +this.token)
    }
    addNewOccurrence(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddOccurrence',formData);
    }
    editOccurrence(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditOccurrence/${id}`,data);
    }
    deleteOccurrence(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletOccurrence/${id}`,formData);
    }
    getOneOccurrence(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetOccurrence/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllInherent():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllInherent' +"?remember_token=" +this.token)
    }
    addNewInherent(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddInherent',formData);
    }
    editInherent(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditInherent/${id}`,data);
    }
    deleteInherent(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletInherent/${id}`,formData);
    }
    getOneInherent(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetInherent/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllResInherent():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllResInherent' +"?remember_token=" +this.token)
    }
    addNewResInherent(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddResInherent',formData);
    }
    editResInherent(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditResInherent/${id}`,data);
    }
    deleteResInherent(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletResInherent/${id}`,formData);
    }
    getOneResInherent(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GeRestInherent/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllResOccurrence():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllResOccurrence' +"?remember_token=" +this.token)
    }
    addNewResOccurrence(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddResOccurrence',formData);
    }
    editResOccurrence(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditResOccurrence/${id}`,data);
    }
    deleteResOccurrence(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletResOccurrenc/${id}`,formData);
    }
    getOneResOccurrence(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetResOccurrence/${id}`+"?remember_token=" +this.token);
    }
    //|-----------------------------------------------------------------------|
    //|-----------------------------------------------------------------------|
    AllIResmpact():Observable<any>
    {
      return this._HttpClient.get(this.baseURL+'AllResImpact' +"?remember_token=" +this.token)
    }
    addNewResImpact(formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + 'AddResImpact',formData);
    }
    editResImpact(id:any,data:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `EditResImpact/${id}`,data);
    }
    deleteResImpact(id:any,formData:any):Observable<any> {
      return this._HttpClient.post(this.baseURL + `deletResImpact/${id}`,formData);
    }
    getOneResImpact(id:any):Observable<any> {
      return this._HttpClient.get(this.baseURL + `GetResImpact/${id}`+"?remember_token=" +this.token);
    }
}
