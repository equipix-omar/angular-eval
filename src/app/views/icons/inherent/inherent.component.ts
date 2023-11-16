import { TaskService } from 'src/app/Services/task.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProjectService } from 'src/app/Services/project.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-inherent',
  templateUrl: './inherent.component.html',
  styleUrls: ['./inherent.component.scss']
})
export class InherentComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;
  remember_token:any;
  dtOptions: any = {};
  lang:any
  dtTrigger:Subject<any>=new Subject<any>();
  constructor(private _EventService:EventService,private _StatusService: StatusService,private toastr: ToastrService,)
    { this.remember_token = localStorage.getItem('TOKEN');
    this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    } }
   getstatus(){
    this._EventService.AllInherent().subscribe((res:any) =>
    {
     this.Allstatus = res.data;
     this.dtTrigger.next(null);
    })
    }
    destroy(id:any)
    {
      this.item.remember_token  = this.remember_token;
      this._EventService.deleteInherent(id,Helper.toFormData(this.item)).subscribe((res:any) => {
        if (res.message == "Inherent risk Deleted Successfully") {
        }
        setTimeout(() =>
            {
            location.reload();
            }, 1000);
            this.toastr.error("Inherent risk Deleted Successfully")
      })
    }
    ngOnInit(): void {
      this.dtOptions = {
        buttons: [
          {
            extend: 'excel',
            text: 'Export to Excel',
            className: 'btn btn-dark mb-3',
          },
          {
            extend: 'print',
            text: 'print this content',
            className: 'btn btn-dark mb-3',
          },
        ],
        pagingType: 'simple_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu : [10, 20, 50,100],
        dom: 'Blfrtip',
     };
      this.getstatus();
    }}
