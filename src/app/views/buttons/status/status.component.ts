import { StatusService } from 'src/app/Services/status.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;
  remember_token:any;
  dtOptions: any = {};
  dtTrigger:Subject<any>=new Subject<any>();
lang:any
  constructor(
   private _StatusService:StatusService, private toastr: ToastrService

  ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    }
   }
   dstroy(id:any)
   {
     this.item.remember_token  = this.remember_token;
     this._StatusService.deleteTaskStatus(id,Helper.toFormData(this.item)).subscribe((res:any) => {

       if (res.message == "Status Deleted Successfully") {
       }
       setTimeout(() =>
           {
           location.reload();
           }, 1000);
           this.toastr.error("Status Deleted Successfully.")

     })
   }
   getstatus(){
    this._StatusService.getAllTaskStatus().subscribe((res:any) =>
    {
     this.Allstatus = res.data;
     this.dtTrigger.next(null);

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


