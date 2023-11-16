import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FileService } from 'src/app/Services/file.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.scss']
})
export class PaginationsComponent {
  Projects:any;
  helper: any = Helper;
  item: any = {};
  dtOptions: any  = {};
  user_id:any;
  id:any;
  pdfUrl: any;
lang:any
dtTrigger:Subject<any>=new Subject<any>();
  constructor(private _FileService:FileService , private _Router:Router
    ,private toastr: ToastrService , private Active:ActivatedRoute,private http: HttpClient
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

    this._FileService.getOneFile(this.id).subscribe((res:any) =>
    {

      if (res.message == "This Is The File By Id") {
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

    }

}

