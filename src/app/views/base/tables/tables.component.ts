import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/Services/project.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  helper: any = Helper;
  item: any = {};
  Allstatus:any;

  remember_token:any;

  id:any;
  data:any[] = [];
  constructor(
    private http:HttpClient , private router:Router , private ProjectServise:ProjectService, private Active:ActivatedRoute
    ,    private toastr: ToastrService,private _StatusService: StatusService

   ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.id= Active.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.ProjectServise.getOneProject(this.id).subscribe((res:any) => {
      this.data.push(res.data)
    })
    this.getstatus();
  }
  getstatus(){
    this._StatusService.getAllStatus().subscribe((res:any) =>
    {
     this.Allstatus = res.data
    })
    }

      AddNote = new FormGroup({
        name: new FormControl("", Validators.required),
        status_id: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        start_date: new FormControl("", Validators.required),
        deadline: new FormControl("", Validators.required),
        project_created: new FormControl("", Validators.required),
        date_finished: new FormControl("", Validators.required),
        progress_from_tasks: new FormControl("", Validators.required),
        project_cost: new FormControl("", Validators.required),
        project_rate_per_hour: new FormControl("", Validators.required),
        estimated_hours: new FormControl("", Validators.required),
        active: new FormControl("", Validators.required),
        progress: new FormControl("", Validators.required),
      });
      editNote()
      {
        let data={
          name:this.AddNote.value.name,
          description:this.AddNote.value.description,
          status_id:this.AddNote.value.status_id,
          deadline:this.AddNote.value.deadline,
          start_date:this.AddNote.value.start_date,
          project_created:this.AddNote.value.project_created,
          date_finished:this.AddNote.value.date_finished,
          progress_from_tasks:this.AddNote.value.progress_from_tasks,
          project_cost:this.AddNote.value.project_cost,
          project_rate_per_hour:this.AddNote.value.project_rate_per_hour,
          estimated_hours:this.AddNote.value.estimated_hours,
          active:this.AddNote.value.active,
          progress:this.AddNote.value.progress,
          remember_token:this.remember_token,

        }
        this.ProjectServise.editProject(this.id,data).subscribe((res)=>
          {
            if (res.message == " Project Updated Successfully") {
              this.toastr.success("Project Updated Successfully.")
              this.router.navigate(['/Project'])
            }
          }
    )
      }

}

