import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent {
  post: any = {};
  item2: any = {};
  arrayOfObjects: any[] = [];
  newarrayOfObjects: any ={};
  Events2: any[] = [];
  Event: any[] = [];
  list: any ;
  listopj: any[] = [];
  id:any
  occurrence:       any;
  Impact:           any;
  Inherent_risks:   any;
  risk_types:       any;
  ResInherent_risks:any;
  Resoccurrence:    any;
  ResImpact:        any;
  newid:any;

  constructor(public _EventService: EventService, private _Router:Router , private Active:ActivatedRoute)
  {
    this.newid = Active.snapshot.paramMap.get("id")
  }
  add() {
    let item = {"id":this.Events2.length +1};
    this.Events2.push(item);
  }
  delete(id:any)
  {
    this.Events2.pop();
  }
  saveList(post:any)
  {
    const numbers = post.split(",");
    for (let i = 0; i <= post.length; i++) {
    }
    for (let i = 0; i < numbers.length -1; i += 3) {
      this.listopj.push(numbers.slice(i, i + 3));
    }
    for (let j = 0; j < this.listopj.length ; j++) {
       this.item2 = [
        {
          "id":      this.Events2.length +1,
          "name":    this.listopj[j][0],
          "number":  this.listopj[j][1],
          "rate_id": this.listopj[j][2]
        }
       ]
       this.arrayOfObjects.push(this.item2[0])
      }
    this._EventService.AddEvent(this.arrayOfObjects).subscribe((res) => {
      this._Router.navigate(["/event"]);
    });
  }
  save(post:any)
  {
    for (let index = 0; index < this.Events2.length; index++) {
      this.Events2[index].audited_management_id = this.newid;
    }
    this._EventService.AddEvent(this.Events2).subscribe((res) => {
      this._Router.navigate(["Project/Risk",this.newid]);
    });
  }
  ngOnInit(): void {
    this._EventService.AllRisk().subscribe((res) => {
      this.risk_types= res.data;
 });
 this._EventService.AllImpact().subscribe((res) => {
      this.Impact= res.data;
 });
 this._EventService.AllInherent().subscribe((res) => {
      this.Inherent_risks= res.data;
 });
 this._EventService.AllOccurrence().subscribe((res) => {
     this.occurrence= res.data;
 });
 this._EventService.AllResInherent().subscribe((res) => {
     this.ResInherent_risks= res.data;
 });
 this._EventService.AllResOccurrence().subscribe((res) => {
     this.Resoccurrence= res.data;
 });
 this._EventService.AllIResmpact().subscribe((res) => {
     this.ResImpact= res.data;
 });
  }
  updateRiskImpact(id:any,ids:any) {
    for (let index = 0; index < this.Events2.length; index++) {
      if (this.Events2[index].id == id) {
        if (this.Events2[index].risk_occurrence == 1) {
          this.Events2[index].risk_impact              = 3;
          this.Events2[index].risk_type                = 1;
          this.Events2[index].inherent_risk_assessment = 4;
          this.Events2[index].risk_rate                = 50;
          // this.isStyleInvalid={'background-color':'red','color':'white'}

        }
        else if (this.Events2[index].risk_occurrence == 2) {
          this.Events2[index].risk_impact              = 4;
          this.Events2[index].risk_type                = 2;
          this.Events2[index].inherent_risk_assessment = 3;
          this.Events2[index].risk_rate                = 150;
          // this.isStyleInvalid={'background-color':'yellow','color':'white'}

        }
        else if (this.Events2[index].risk_occurrence == 3) {
          this.Events2[index].risk_impact              = 1;
          this.Events2[index].risk_type                = 1;
          this.Events2[index].inherent_risk_assessment = 4;
          this.Events2[index].risk_rate                = 100;
        }
        else {
          this.Events2[index].risk_impact              = 2;
          this.Events2[index].risk_type                = 2;
          this.Events2[index].inherent_risk_assessment = 1;
          this.Events2[index].risk_rate                = 200;
        }
      }
    }
    this._EventService.editEvent(this.Events2).subscribe((res) => {
    });
  }
}

