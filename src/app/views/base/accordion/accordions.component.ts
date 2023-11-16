import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { FileService } from 'src/app/Services/file.service';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {
  helper: any = Helper;
  item: any = {};
  description:any="";
  subject:any;
  external_link:any;
  project_id:any;
  user_id:any;
  remember_token:any


  constructor(
    private http:HttpClient , private router:Router , private _FileService:FileService,   private toastr: ToastrService
    , private _StatusService:StatusService ,private authsevise:AuthService,private _priorityservise:PriorityService,
    Active:ActivatedRoute,
   ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.user_id        = localStorage.getItem('UserId');
    this.project_id     = Active.snapshot.paramMap.get("id")

  }

  ngOnInit(): void {

  }
  submit(): void{
 this.item.remember_token   = this.remember_token;
 this.item.user_id          = this.user_id;
 this.item.project_id       = this.project_id;
 //console.log(this.item);

 this._FileService.addNewFile(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "THIS File Added Successfully") {
          this.toastr.success("THIS File Added Successfully.")
          this.router.navigate(["Project/View/" + this.project_id + "/file",this.project_id]);

          setTimeout(() =>
          {
          location.reload();
          }, 500);
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )

  }



}
