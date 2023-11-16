import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import * as xls from 'xlsx'

@Component({
  selector: 'app-newcrm',
  templateUrl: './newcrm.component.html',
  styleUrls: ['./newcrm.component.scss']
})
export class NewcrmComponent {
  users:any
  post: any = {};
  item2: any = {};
  audited_management_id:any;
  arrayOfObjects: any[] = [];
  newarrayOfObjects: any ={};
  Events2: any = [];
  Events3: any[] = [];
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
lang:any
  constructor(public _EventService: EventService, private _Router:Router, private Active:ActivatedRoute)
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
      this.Events2[index].implantation_date = JSON.stringify(this.Events2[index].implantation_date).split('T').splice(0, 1).join('').replace('"', '');
    }
    this._EventService.AddNote2(this.Events2).subscribe((res) => {
      this._Router.navigate(["Project/Risk/Note",this.newid]);
    });
  }
  ngOnInit(): void {
    this._EventService.getAllEvent(this.newid).subscribe((res) => {
      for (let index = 0; index < res.data.length; index++) {
        this.Events3.push({id:res.data[index].id,name:res.data[index].risk_code}) ;
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
            //console.log(this.users)
    }
  }
  addex()
  {
    for (let index = 0; index < this.users.length; index++) {
      this.users[index].audited_management_id = this.newid;
    }
    this._EventService.AddNote2(this.users).subscribe((res) => {
      this._Router.navigate(["Project/Risk/Note",this.newid]);
    });
  }
}

