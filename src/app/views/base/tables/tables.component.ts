import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/Services/project.service';
import { SectorService } from 'src/app/Services/sector.service';
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
  Allsector:any;
  remember_token:any;
  formattedDate: any;
  da:any ="(Eastern European Standard Time)"
  id:any;
  data:any[] = [];
  d1:any;
  d2:any;
  d3:any;
  d4:any;
  constructor(
    private http:HttpClient , private router:Router , private ProjectServise:ProjectService, private Active:ActivatedRoute
    ,private toastr: ToastrService,private _StatusService: StatusService,private sec:SectorService
   ) {
    this.remember_token = localStorage.getItem('TOKEN');
    this.id= Active.snapshot.paramMap.get("id");
  }
  formatDate(date: any) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
  }
      ngOnInit(): void {
       this.ProjectServise.getOneProject(this.id).subscribe((res:any) => {
       this.data.push(res.data)
       this.d1 = this.data[0].deadline;
       this.d2 = this.data[0].project_created;
       this.d3 = this.data[0].date_finished;
       this.d4 = this.data[0].start_date;
       })
       this.getstatus();
       this.getsector();
      }
      getstatus(){
    this._StatusService.getAllStatus().subscribe((res:any) =>
    {
     this.Allstatus = res.data
    })
      }
      getsector(){
      this.sec.Allsector().subscribe((res:any) =>
      {
       this.Allsector = res.data
      })
      }
        save()
        {
          if (this.data[0].deadline != this.d1) {
           this.data[0].deadline = this.formatDate(this.data[0].deadline);
          }
          else{
            this.data[0].deadline = this.data[0].deadline ;
          }
          if (this.data[0].project_created != this.d2) {
            this.data[0].project_created = this.formatDate(this.data[0].project_created);
           }
           else
           {
            this.data[0].project_created = this.data[0].project_created;
           }
          if (this.data[0].date_finished != this.d3) {
            this.data[0].date_finished = this.formatDate(this.data[0].date_finished);
           }
           else{
            this.data[0].date_finished = this.data[0].date_finished;
           }
          if (this.data[0].start_date != this.d4) {
            this.data[0].start_date = this.formatDate(this.data[0].start_date);
           }
           else{
            this.data[0].start_date = this.data[0].start_date;
           }
          this.data[0].remember_token = this.remember_token;
          this.ProjectServise.editProject(this.id,this.data[0]).subscribe((res)=>
            {
              if (res.message == " Project Updated Successfully") {
                this.toastr.success("Project Updated Successfully.")
                this.router.navigate(['/Project'])
              }
            })
        }
}

