import { ToastrService } from 'ngx-toastr';
import { NoteService } from './../../../Services/note.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/helper';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  Projects:any[]=[];
  helper: any = Helper;
  item: any = {};
  dtOptions: any  = {};
  user_id:any;
  id:any;
  lang:any
dtTrigger:Subject<any>=new Subject<any>();
  constructor(private _NoteService:NoteService , private _Router:Router
    ,private toastr: ToastrService, private Active:ActivatedRoute
    )
   {
    this.id= Active.snapshot.paramMap.get("id")
    this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    }
   }
   ngOnInit(): void
   {
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
   getProjects(){

    this._NoteService.getOneNote(this.id).subscribe((res:any) =>
    {


      if (res.message == "This Is The Note By Id") {
        this.Projects = res.data;
      this.dtTrigger.next(null);
      }
      else
      {
        localStorage.clear();
        this._Router.navigate(["/Project"]);
      }

    })
    }
    destroy(id:any)
    {
      // this.item.remember_token  = this.remember_token;
      // this.gatProjectService.deleteProject(id,Helper.toFormData(this.item)).subscribe((res:any) => {

      //   if (res.message == "Project Deleted Successfully") {
      //   }
      //   setTimeout(() =>
      //       {
      //       location.reload();
      //       }, 1000);
      //       this.toastr.error("Project Deleted Successfully.")

      // })
    }

}
