import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import * as xls from 'xlsx'
@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent {
  post: any = {};
  name:any;
  Events: any = [];
  Event: any[] = [];
  Events2: any[] = [];

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

  constructor(public _EventService: EventService,private _router:Router , private Active:ActivatedRoute) {
    this.newid = Active.snapshot.paramMap.get("id")
  }
  editall(post:any)
  {
    this._EventService.editEvent(this.Events).subscribe((res) => {
    });
  }
  deleteall(post:any)
  {
    this._EventService.deleteEvent(this.Events).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  deleteone(id:any,post:any)
  {
    this._EventService.deleteoneEvent(post.id,post).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  ngOnInit() {
    this._EventService.getAllEvent(this.newid).subscribe((res) => {
      this.Events = res.data;
    });
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
    this._EventService.AddEvent(this.users).subscribe((res) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);    });
  }

  updateRiskImpact(id:any,ids:any) {
    for (let index = 0; index < this.Events.length; index++) {
      if (this.Events[index].id == id) {
        if (this.Events[index].risk_occurrence == 1 && this.Events[index].risk_impact ==1 && this.Events[index].risk_type==1) {
          this.Events[index].inherent_risk_assessment = 1;
          this.Events[index].risk_rate                = 60;
        }
        else if (this.Events[index].risk_occurrence == 2 && this.Events[index].risk_impact ==2 && this.Events[index].risk_type==2) {
          this.Events[index].inherent_risk_assessment = 2;
          this.Events[index].risk_rate                = 40;
        }
        else if (this.Events[index].risk_occurrence == 3 && this.Events[index].risk_impact ==3 && this.Events[index].risk_type==3) {
          this.Events[index].inherent_risk_assessment = 3;
          this.Events[index].risk_rate                = 20;
        }
        else if (this.Events[index].risk_occurrence == 4 && this.Events[index].risk_impact ==4 && this.Events[index].risk_type==4) {
          this.Events[index].inherent_risk_assessment = 4;
          this.Events[index].risk_rate                = 90;
        }
      }
    }
    // this._EventService.editEvent(this.Events).subscribe((res) => {
    // });
  }
  updateRiskImpact2(id:any,ids:any) {
    for (let index = 0; index < this.Events.length; index++) {
      if (this.Events[index].id == id) {
        if (this.Events[index].residual_risk_occurrence == 1 && this.Events[index].residual_risk_impact ==1 ) {
          this.Events[index].residual_risk_assessment = 1;
          this.Events[index].residual_risk_rate                = 60;
        }
        else if (this.Events[index].residual_risk_occurrence == 2 && this.Events[index].residual_risk_impact ==2 ) {
          this.Events[index].residual_risk_assessment = 2;
          this.Events[index].residual_risk_rate                = 40;
        }
        else if (this.Events[index].residual_risk_occurrence == 3 && this.Events[index].residual_risk_impact ==3 ) {
          this.Events[index].residual_risk_assessment = 3;
          this.Events[index].residual_risk_rate                = 20;
        }
        else if (this.Events[index].residual_risk_occurrence == 4 && this.Events[index].residual_risk_impact ==4 ) {
          this.Events[index].residual_risk_assessment = 4;
          this.Events[index].residual_risk_rate                = 90;
        }
      }
    }
    // this._EventService.editEvent(this.Events).subscribe((res) => {
    // });
  }

  updateRiskImpactnew(id:any,ids:any) {
    for (let index = 0; index < this.Events2.length; index++) {
      if (this.Events2[index].id == id) {
        if (this.Events2[index].risk_occurrence == 1 && this.Events2[index].risk_impact ==1 && this.Events2[index].risk_type==1) {
          this.Events2[index].inherent_risk_assessment = 1;
          this.Events2[index].risk_rate                = 60;
        }
        else if (this.Events2[index].risk_occurrence == 2 && this.Events2[index].risk_impact ==2 && this.Events2[index].risk_type==2) {
          this.Events2[index].inherent_risk_assessment = 2;
          this.Events2[index].risk_rate                = 40;
        }
        else if (this.Events2[index].risk_occurrence == 3 && this.Events2[index].risk_impact ==3 && this.Events2[index].risk_type==3) {
          this.Events2[index].inherent_risk_assessment = 3;
          this.Events2[index].risk_rate                = 20;
        }
        else if (this.Events2[index].risk_occurrence == 4 && this.Events2[index].risk_impact ==4 && this.Events2[index].risk_type==4) {
          this.Events2[index].inherent_risk_assessment = 4;
          this.Events2[index].risk_rate                = 90;
        }
      }
    }
    // this._EventService.editEvent(this.Events2).subscribe((res) => {
    // });
  }
  updateRiskImpact2new(id:any,ids:any) {
    for (let index = 0; index < this.Events2.length; index++) {
      if (this.Events2[index].id == id) {
        if (this.Events2[index].residual_risk_occurrence == 1 && this.Events2[index].residual_risk_impact ==1 ) {
          this.Events2[index].residual_risk_assessment = 1;
          this.Events2[index].residual_risk_rate                = 60;
        }
        else if (this.Events2[index].residual_risk_occurrence == 2 && this.Events2[index].residual_risk_impact ==2 ) {
          this.Events2[index].residual_risk_assessment = 2;
          this.Events2[index].residual_risk_rate                = 40;
        }
        else if (this.Events2[index].residual_risk_occurrence == 3 && this.Events2[index].residual_risk_impact ==3 ) {
          this.Events2[index].residual_risk_assessment = 3;
          this.Events2[index].residual_risk_rate                = 20;
        }
        else if (this.Events2[index].residual_risk_occurrence == 4 && this.Events2[index].residual_risk_impact ==4 ) {
          this.Events2[index].residual_risk_assessment = 4;
          this.Events2[index].residual_risk_rate                = 90;
        }
      }
    }
    // this._EventService.editEvent(this.Events2).subscribe((res) => {
    // });
  }
  add2() {
    let item = {"id":this.Events2.length +1};
    this.Events2.push(item);
  }
  delete(id:any)
  {
    this.Events2.pop();
  }
  save(post:any)
  {
    for (let index = 0; index < this.Events2.length; index++) {
      this.Events2[index].audited_management_id = this.newid;
    }
    this._EventService.AddEvent(this.Events2).subscribe((res) => {
     // this._router.navigate(["Project/Risk",this.newid]);
     window.location.reload();
    });
  }
 }

