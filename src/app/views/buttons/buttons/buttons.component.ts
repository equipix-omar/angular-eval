import { Router } from '@angular/router';
import { TaskService } from './../../../Services/task.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Helper } from 'src/app/helper';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  Tasks:any;
  dtOptions: any  = {};
  helper: any = Helper;
  dtTrigger:Subject<any>=new Subject<any>();
  item: any = {};
  remember_token:any;
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
      this.getTasks();
    }
    constructor(private gatTasksService:TaskService , private _Router:Router    ,   private toastr: ToastrService
      )
     {
      this.remember_token = localStorage.getItem('TOKEN');
      }
    getTasks(){
      this.gatTasksService.getAllTask().subscribe((res:any) =>
      {
        if (res.message == "This Is All TASKS") {
          this.Tasks = res.data;
          this.dtTrigger.next(null);
        }
        else
        {
          localStorage.clear();
          this._Router.navigate(["/login"]);
        }
      })
      }
      dstroy(id:any)
      {
        this.item.remember_token  = this.remember_token;
        this.gatTasksService.deleteTask(id,Helper.toFormData(this.item)).subscribe((res:any) => {

          if (res.message == "Task Deleted Successfully") {
          }
          setTimeout(() =>
              {
              location.reload();
              }, 1000);
              this.toastr.error("Task Deleted Successfully.")

        })
      }


  }
