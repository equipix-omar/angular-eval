import { Router } from '@angular/router';
import { ProjectService } from './../../../Services/project.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Helper } from 'src/app/helper';
import { ToastrService } from 'ngx-toastr';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  helper: any = Helper;
  item: any = {};
  remember_token:any;
Projects:any[]=[];
token:any;
dtOptions: any  = {};
dtTrigger:Subject<any>=new Subject<any>();
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
    this.getProjects();
  }
  constructor(private gatProjectService:ProjectService , private _Router:Router
    ,   private toastr: ToastrService,private _AuthService:AuthService
    )
   {

    this.remember_token = localStorage.getItem('TOKEN');

   }

  getProjects(){

    this.gatProjectService.getAllProject().subscribe((res:any) =>
    {
      if (res.message == "This Is All Projects") {
      this.Projects = res.data
      this.dtTrigger.next(null);
      }
      else
      {
        localStorage.clear();
        this._Router.navigate(["/login"]);
      }
    })
    }

    destroy(id:any)
    {
      this.item.remember_token  = this.remember_token;
      this.gatProjectService.deleteProject(id,Helper.toFormData(this.item)).subscribe((res:any) => {

        if (res.message == "Project Deleted Successfully") {
        }
        setTimeout(() =>
            {
            location.reload();
            }, 1000);
            this.toastr.error("Project Deleted Successfully.")

      })
    }



}
