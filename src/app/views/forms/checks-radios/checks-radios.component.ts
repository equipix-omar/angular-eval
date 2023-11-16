import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { TaskService } from 'src/app/Services/task.service';
import { AppComponent } from 'src/app/app.component';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-checks-radios',
  templateUrl: './checks-radios.component.html',
  styleUrls: ['./checks-radios.component.scss']
})
export class ChecksRadiosComponent {
  helper: any = Helper;
  item: any = {};
  AllUser:any;
  remember_token:any;
  dtOptions: any = {};
  dtTrigger:Subject<any>=new Subject<any>();
  Imageurl :any = AppComponent.ImageURL
lang:any
  constructor(
   private authsevise:AuthService, private toastr: ToastrService
  ) {
    this.remember_token = localStorage.getItem('TOKEN');
     this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    }
// console.log(this.remember_token);
// window.location.reload();

   }
   getstatus(){
    this.authsevise.getAllUser().subscribe((res:any) =>
    {
     this.AllUser = res.data;
     this.dtTrigger.next(null);
    })
    }

    destroy(id:any)
    {
      this.item.remember_token  = this.remember_token;
      this.authsevise.deleteUser(id,this.item).subscribe((res:any) => {

        if (res.message == "User Deleted Successfully") {
        }
        setTimeout(() =>
            {
            location.reload();
            }, 1000);
            this.toastr.error("User Deleted Successfully.")
      })
    }
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

      this.getstatus();
    }}


