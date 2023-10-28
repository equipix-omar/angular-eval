import { PriorityService } from './../../../Services/priority.service';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { TaskService } from 'src/app/Services/task.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss']
})
export class ButtonGroupsComponent {

  helper: any = Helper;
  item: any = {};
  Priorities:any;
  remember_token:any;
  dtOptions: any = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    private _priorityservise:PriorityService, private toastr: ToastrService
  ) {
    this.remember_token = localStorage.getItem('TOKEN');

   }

   destroy(id:any)
   {
     this.item.remember_token  = this.remember_token;
     this._priorityservise.deletePriority(id,Helper.toFormData(this.item)).subscribe((res:any) => {

       if (res.message == "Priority Deleted Successfully") {
       }
       setTimeout(() =>
           {
           location.reload();
           }, 1000);
           this.toastr.error("Priority Deleted Successfully.")

     })
   }
   getstatus(){
    this._priorityservise.getAllPriority().subscribe((res:any) =>
    {
     this.Priorities = res.data;
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


