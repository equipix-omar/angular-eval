import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;
  AllPriority:any;
  AllUser:any;
  remember_token:any;
  id:any;
  data:any[] = [];
  constructor(
    private http:HttpClient , private router:Router , private _TaskService:TaskService, private Active:ActivatedRoute
    , private toastr: ToastrService,private _StatusService: StatusService,private authsevise:AuthService,private _priorityservise:PriorityService

   ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.id= Active.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this._TaskService.getOneTask(this.id).subscribe((res:any) => {
      this.data.push(res.data)
    })
    this.getstatus();
    this.getAllPriority();
    this.getAllUser();
  }
  AddNote = new FormGroup({
    name: new FormControl("", Validators.required),
    status_id: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    priority_id: new FormControl("", Validators.required),
    expected_price: new FormControl("", Validators.required),
    expected_hours: new FormControl("", Validators.required),

     //dateadded: new FormControl("", Validators.required),
    //addedfrom: new FormControl("", Validators.required),
    //is_added_from_member: new FormControl("", Validators.required),
    //is_public: new FormControl("", Validators.required),
    // kanban_order: new FormControl("", Validators.required),
   // visible_to_client: new FormControl("", Validators.required),
  });
  submit(): void{

  }
    getstatus(){
      this._StatusService.getAllStatus().subscribe((res:any) =>
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
      editNote()
      {
        let data={
          name:this.AddNote.value.name,
          description:this.AddNote.value.description,
          status_id:this.AddNote.value.status_id,
          priority_id:this.AddNote.value.priority_id,
          expected_price:this.AddNote.value.expected_price,
          expected_hours:this.AddNote.value.expected_hours,
          // dateadded:this.AddNote.value.dateadded,
          // addedfrom:this.AddNote.value.addedfrom,
          //is_added_from_member:this.AddNote.value.is_added_from_member,
          // is_public:this.AddNote.value.is_public,
          // kanban_order:this.AddNote.value.kanban_order,
          //visible_to_client:this.AddNote.value.visible_to_client,
          remember_token:this.remember_token,
        }

        this._TaskService.editTask(this.id,data).subscribe((res)=>
          {

            if (res.message == "Task Updated Successfully") {
              this.toastr.success("Task Updated Successfully.")
              this.router.navigate(['/Task'])
            }
          }
    )
      }

}


