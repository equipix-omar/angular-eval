import { TaskService } from 'src/app/Services/task.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProjectService } from 'src/app/Services/project.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.scss']
})
export class OccurrenceComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;
  remember_token:any;
  dtOptions: any = {};
  dtTrigger:Subject<any>=new Subject<any>();
  constructor(private _EventService:EventService,private _StatusService: StatusService,private toastr: ToastrService,)
    { this.remember_token = localStorage.getItem('TOKEN'); }
   getstatus(){
    this._EventService.AllOccurrence().subscribe((res:any) =>
    {
     this.Allstatus = res.data;
     this.dtTrigger.next(null);
    })
    }
    destroy(id:any)
    {
      this.item.remember_token  = this.remember_token;
      this._EventService.deleteOccurrence(id,Helper.toFormData(this.item)).subscribe((res:any) => {
        if (res.message == "occurrence Deleted Successfully") {
        }
        setTimeout(() =>
            {
            location.reload();
            }, 1000);
            this.toastr.error("occurrence Deleted Successfully")
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
