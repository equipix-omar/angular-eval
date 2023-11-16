import { DatePipe } from '@angular/common';
import { Helper } from './../../../helper';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
})
export class DropdownsComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;
  AllPriority:any;
  AllUser:any;

  description:any="";
  name:any;
  status_id:any;
  dateadded:any;
  addedfrom:any;
  priority_id:any;
  expected_price:any;
  expected_hours:any;


  remember_token:any


  constructor( public datepipe: DatePipe,
    private http:HttpClient , private router:Router , private _TaskService:TaskService,   private toastr: ToastrService
    , private _StatusService:StatusService ,private authsevise:AuthService,private _priorityservise:PriorityService
   ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.addedfrom      = localStorage.getItem('UserId');
    this.dateadded =this.datepipe.transform((new Date), 'MM/dd/yyyy');

  }

  ngOnInit(): void {
    this.getstatus();
    this.getAllPriority();
    this.getAllUser()
  }
  submit(): void{
      if(this.item.dateadded)
      {
        this.item.dateadded = JSON.stringify(this.item.dateadded).split('T').splice(0, 1).join('').replace('"', '');
      }


 //.log(this.item);
 this.item.remember_token   = this.remember_token;
 this.item.addedfrom   = this.addedfrom;
 this.item.dateadded   = this.dateadded;
 this._TaskService.addNewTask(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "NEW TASK Created Successfully") {
          this.toastr.success("NEW TASK Created Successfully.")
          this.router.navigate(['/Task'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

    getstatus(){
      this._StatusService.getAllTaskStatus().subscribe((res:any) =>
      {
       this.Allstatus = res.data
      })
      }
    getAllPriority(){
        this._priorityservise.getAllPriority().subscribe((res:any) =>
        {
         this.AllPriority = res.data
        })
        }
    getAllUser(){
          this.authsevise.getAllUser().subscribe((res:any) =>
          {
           this.AllUser = res.data
          })
          }

}
