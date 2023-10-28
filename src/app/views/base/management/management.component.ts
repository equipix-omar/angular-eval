import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FileService } from 'src/app/Services/file.service';
import { ProjectService } from 'src/app/Services/project.service';
import { Helper } from 'src/app/helper';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})

export class ManagementComponent {
  Projects:any;
  mangs:any[]=[];
  helper: any = Helper;
  item: any = {};
  dtOptions: any  = {};
  user_id:any;
  id:any;
  pdfUrl: any;
  newid:any;
  constructor(private _FileService:ProjectService , private _Router:Router
    ,private toastr: ToastrService , private Active:ActivatedRoute,private http: HttpClient
    )
    {
      this.id= Active.snapshot.paramMap.get("id")
    }
    ngOnInit()
    {
      this.getProjects();
    }
    getProjects(){

      this._FileService.getOnemanagement(this.id).subscribe((res:any) =>
      {

        if (res.message == "This Is The File By Id") {
        this.Projects = res.data;
         for (let index = 0; index < this.Projects.length; index++) {
          this.mangs.push(this.Projects[index].management)
         }
        }
        else
        {
          localStorage.clear();
          this._Router.navigate(["/Project"]);
        }

      })
      }
      getid(id:any)
      {
        this.newid = id;
        console.log(this.newid);

      }
}
