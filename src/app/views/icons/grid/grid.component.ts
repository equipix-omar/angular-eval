import { EventService } from './../../../Services/event.service';
import { Component, OnInit,ViewEncapsulation } from "@angular/core";
import {
  alignHeaders,
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell
} from "./utils/hooks-callbacks";
import { Router } from "@angular/router";
import * as xls from 'xlsx'
import { index } from 'handsontable/helpers/dom';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  alignHeaders = alignHeaders;
  drawCheckboxInRowHeaders = drawCheckboxInRowHeaders;
  addClassesToRows = addClassesToRows;
  changeCheckboxCell = changeCheckboxCell;
  genderSource:any=[1,2,3];
  colHeaders = [
    "Id",
    "procedure",
    "code",
    "type",
    "description",
    "causes",
    "effect",
    "occurrence",
    "impact",
    "inherent",
    "rate",
    "controls",
    "res_occurrence",
    "res_impact",
    "res_assessment",
    "res_rate",
  ];
  hiddenColumns = {
    indicators: true
  };
  licenseKey = "non-commercial-and-evaluation";
  Events: any[] = [];
  Event: any[] = [];
  Eventname: any[] = [];
  new: any[] = [];
  results:any[] = [];
  arrayOfObjects: any[] = [];
  newarrayOfObjects: any[] =[];
  item2: any = {};
  mainId: any[] = [];
  remId:  any[] = [];
  users:any
  risk_type2:         any   = {};
  occurrence2:        any[] = [];

  occurrence:         any[] = [];
  Impact:             any[] = [];
  Inherent_risks:     any[] = [];
  risk_type:          any[] = [];
  ResInherent_risks:  any[] = [];
  Resoccurrence:      any[] = [];
  ResImpact:          any[] = [];
  constructor(private _EventService: EventService, private router:Router){}
  ngOnInit(): void {
    // this._EventService.getAllEvent().subscribe((res) => {
    //   for (let i = 0; i < res.data.length; i ++) {
    //     this.Events = res.data;
    //      this.results.push(Object.values(this.Events[i])) ;
    //   }
    // });
    this._EventService.AllRisk().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
         this.risk_type.push(res.data[i].name);
      }
    });
    this._EventService.AllImpact().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
         this.Impact.push(res.data[i].name);
      }
    });
    this._EventService.AllInherent().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
         this.Inherent_risks.push(res.data[i].name);
      }
    });
    this._EventService.AllOccurrence().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
        this.occurrence.push(res.data[i].name);
      }
    });
    this._EventService.AllResInherent().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
        this.ResInherent_risks.push(res.data[i].name);
      }
    });
    this._EventService.AllResOccurrence().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
        this.Resoccurrence.push(res.data[i].name);
      }
    });
    this._EventService.AllIResmpact().subscribe((res) => {
      for (let i = 0; i < res.data.length; i ++) {
        this.ResImpact.push(res.data[i].name);
      }
    });
  }
  afterChange:any = (hotInstance: any, changes: any, source: any) =>
  {
    for (let index = 0; index < this.results.length; index++)
     {
      const obj1 = Object.assign({}, this.results[index]);
      this.item2 = [
        {
          "id":                                 obj1[0],
          "procedure":                          obj1[1],
          "risk_code":                          obj1[2],
          "risk_type":                          obj1[3],
          "risk_description":                   obj1[4],
          "risk_causes":                        obj1[5],
          "risk_effect":                        obj1[6],
          "risk_occurrence":                    obj1[7],
          "risk_impact":                        obj1[8],
          "inherent_risk_assessment":           obj1[9],
          "risk_rate":                          obj1[10],
          "residual_risk_current_controls":     obj1[11],
          "residual_risk_occurrence":           obj1[12],
          "residual_risk_impact":               obj1[13],
          "residual_risk_assessment":           obj1[14],
          "residual_risk_rate":                 obj1[15],
        }
       ]
       for (let index = 0; index < this.item2.length; index++)
       {
        if (this.item2[index].procedure != null        && this.item2[index].risk_code != null   && this.item2[index].risk_type != null
        && this.item2[index].risk_description != null  && this.item2[index].risk_causes != null && this.item2[index].risk_effect != null
        && this.item2[index].risk_occurrence != null   && this.item2[index].risk_impact != null && this.item2[index].inherent_risk_assessment != null
        && this.item2[index].risk_rate != null)
        this.arrayOfObjects.push(this.item2[index])
        }}
      this._EventService.editEvent(this.arrayOfObjects).subscribe((res) => {
      });
  };
  afterRemoveRow: any = (hotInstance: any, changes: any, source: any) => {
    for (let index = 0; index < this.Events.length; index++) {
      this.mainId.push(this.Events[index].id);
    }
    for (let index = 0; index < this.results.length; index++) {
      this.remId.push(this.results[index][0]);
    }
    const removedIds = this.mainId.filter(id =>!this.remId.includes(id));
    this._EventService.deleteoneEvent(removedIds[0],this.Events).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
  DeleteAll(result:any)
  {
    this._EventService.deleteEvent(this.Events).subscribe((res) => {
    });
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
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
           // console.log(this.users)
    }
  }
  add()
  {
    this._EventService.AddEvent(this.users).subscribe((res) => {
      window.location.reload();
    });
  }
  Add()
  {
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  }
}

