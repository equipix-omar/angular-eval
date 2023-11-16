import { EventService } from './../../../Services/event.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import * as xls from 'xlsx'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponentr {
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
  constructor(public _EventService: EventService,private Active:ActivatedRoute, private toastr: ToastrService)
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
  editall(post:any)
  {
     this._EventService.editNote(this.Events).subscribe((res) => {
      this.toastr.success("New Risk Control Matrix Updated Successfully.")
      window.location.reload();
      });
  }
  deleteall(post:any)
  {
    this._EventService.deleteNote(this.Events).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  deleteone(id:any,post:any)
  {
    this._EventService.deleteoneNote(post.id,post).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  ngOnInit() {
    this._EventService.getAllNote(this.newid).subscribe((res) => {
      this.Events = res.data;
    });
    this._EventService.getAllEvent(this.newid).subscribe((res) => {
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
    }
  }
  add()
  {
    for (let index = 0; index < this.users.length; index++) {
      this.users[index].audited_management_id = this.newid;
    }
    this._EventService.AddNote(this.users).subscribe((res) => {
      window.location.reload();
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
      if (
        !this.Events3[index].number || !this.Events3[index].operation || !this.Events3[index].sub_operation|| !this.Events3[index].Review_objectives||
        !this.Events3[index].Testing_procedures || !this.Events3[index].Requirements || !this.Events3[index].Evaluating_effectiveness|| !this.Events3[index].Report_Note ||
        !this.Events3[index].Requirements_status || !this.Events3[index].Reference_worksheet || !this.Events3[index].Initial_remarks|| !this.Events3[index].Risk

        ) {
        this.toastr.error("Enter All Field.")
      }
      else{
        this._EventService.AddNote(this.Events3).subscribe((res) => {
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

