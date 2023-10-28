import { EventService } from './../../../Services/event.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(public _EventService: EventService, private Active:ActivatedRoute)
  {
    this.newid = Active.snapshot.paramMap.get("id")
  }
  editall(post:any)
  {
     for (let index = 0; index < this.Events.length; index++) {
    this.Events[index].implantation_date = JSON.stringify(this.Events[index].implantation_date).split('T').splice(0, 1).join('').replace('"', '');
     }
     this._EventService.editNote2(this.Events).subscribe((res) => {
      });
      setTimeout(() =>
      {
      location.reload();
      }, 500);
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
    });
    this._EventService.getAllEvents().subscribe((res) => {
      for (let index = 0; index < res.data.length; index++) {
        this.Events2.push({id:res.data[index].id,name:res.data[index].risk_code}) ;
      }
    });
  }
  readExcelFile(e:any){
    const file =e.target.files[0];
    let fr =new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload =()=>{
     let data=  fr.result;
      let workbook= xls.read(data,{type:'array'});
            const sheetname= workbook.SheetNames[0];
            const sheet1 = workbook.Sheets[sheetname]
            this.users=xls.utils.sheet_to_json(sheet1,{raw:true});
            console.log(this.users)
    }
  }
  add()
  {
    for (let index = 0; index < this.users.length; index++) {
      this.users[index].audited_management_id = this.newid;
    }
    this._EventService.AddNote2(this.users).subscribe((res) => {
      window.location.reload();
    });
  }
}
