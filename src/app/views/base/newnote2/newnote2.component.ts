import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { FileService } from 'src/app/Services/file.service';
import { NoteService } from 'src/app/Services/note.service';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-newnote2',
  templateUrl: './newnote2.component.html',
  styleUrls: ['./newnote2.component.scss']
})
export class Newnote2Component {
  helper: any = Helper;
  item: any = {};
  content:any="";
  project_id:any;
  user_id:any;
  remember_token:any


  constructor(
    private http:HttpClient , private router:Router , private _NoteService:NoteService,   private toastr: ToastrService
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
 this._NoteService.addNewNote(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "THIS Note Added Successfully") {
          this.toastr.success("THIS Note Added Successfully.")
          setTimeout(() =>
          {
          location.reload();
          }, 500);
          //this.router.navigate(['./'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}



}
