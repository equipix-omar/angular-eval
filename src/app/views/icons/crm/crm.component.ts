import { EventService } from './../../../Services/event.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import * as xls from 'xlsx'
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent {
  post: any = {};
  name:any;
  Events: any = [];
  Events2: any = [];
  users:any
  id:                             any;
  procedure:                      any;
  risk_code:                      any;
  risk_description:               any;
  risk_causes:                    any;
  risk_effect:                    any;
  residual_risk_current_controls: any;
  risk_occurrence:                any;
  risk_impact:                    any;
  risk_type:                      any;
  inherent_risk_assessment:       any;
  risk_rate:                      any;
  residual_risk_occurrence:       any;
  residual_risk_impact:           any;
  residual_risk_assessment:       any;
  residual_risk_rate:             any;
  occurrence:       any;
  Impact:           any;
  Inherent_risks:   any;
  risk_types:       any;
  ResInherent_risks:any;
  Resoccurrence:    any;
  ResImpact:        any;
  newid:any;
  Events3: any[] = [];
  lang:any
  constructor(public _EventService: EventService, private Active:ActivatedRoute,private _Router:Router, private toastr: ToastrService)
  {
    this.newid = Active.snapshot.paramMap.get("id")
    this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    }
  }
  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
  }
  editall(post:any)
  {
     for (let index = 0; index < this.Events.length; index++) {
      this.Events[index].implantation_date = JSON.stringify(this.Events[index].implantation_date).split('T').splice(0, 1).join('').replace('"', '');
      let currentDate = new Date(this.Events[index].implantation_date);
      currentDate.setDate(currentDate.getDate() + 1);
      let formattedDate = currentDate.toISOString().split('T')[0];
      this.Events[index].implantation_date = formattedDate
      }
     this._EventService.editNote2(this.Events).subscribe((res) => {
      this.toastr.success("New Risk Note Successfully.")
      window.location.reload();
      });
  }
  deleteall(post:any)
  {
    this._EventService.deleteNote2(this.Events).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  deleteone(id:any,post:any)
  {
    this._EventService.deleteoneNote2(post.id,post).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  ngOnInit() {
    this._EventService.getAllNote2(this.newid).subscribe((res) => {
      this.Events = res.data;
      for (let index = 0; index < this.Events.length; index++) {
      }
    });
    this._EventService.getAllEvent(this.newid).subscribe((res) => {
      for (let index = 0; index < res.data.length; index++) {
        this.Events2.push({id:res.data[index].id,name:res.data[index].risk_code}) ;
      }
    });
  }
  add2() {
    let item = {"id":this.Events3.length +1};
    this.Events3.push(item);
  }
  delete(id:any)
  {
    this.Events3.pop();
  }
  save(post:any)
  {
    for (let index = 0; index < this.Events3.length; index++) {
      this.Events3[index].audited_management_id = this.newid;
      if (this.Events3[index].implantation_date) {
        //this.Events3[index].implantation_date = JSON.stringify(this.Events3[index].implantation_date).split('T').splice(0, 1).join('').replace('"', '');
        this.Events3[index].implantation_date = this.formatDate(this.Events3[index].implantation_date);
      }
      if (
        !this.Events3[index].observation || !this.Events3[index].detaild_observation || !this.Events3[index].root_cause|| !this.Events3[index].recommendation||
        !this.Events3[index].management_response || !this.Events3[index].executive_responsibility || !this.Events3[index].Requirements_status|| !this.Events3[index].rate ||
        !this.Events3[index].risk || !this.Events3[index].implantation_date

        ) {
        this.toastr.error("Enter All Field.")
      }
      else{
        this._EventService.AddNote2(this.Events3).subscribe((res) => {
          if (res.message =="New event Created Successfully") {
            this.toastr.success("New Risk Created Successfully.")
            window.location.reload();
           }
           else{
            this.toastr.error("Enter All Field.")
           }
        });
      }
    }

  }
}
