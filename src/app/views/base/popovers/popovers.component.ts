import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent implements OnInit {

  helper: any = Helper;
  item: any = {};
  name:any;
  remember_token:any
  constructor(private _StatusService: StatusService,private toastr: ToastrService, private router:Router) {
    this.remember_token = localStorage.getItem('TOKEN');
   }
  ngOnInit(): void {
  }
  submit(): void{
    this.item.remember_token  = this.remember_token;
    this._StatusService.addNewProjectStatus(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New Status Created Successfully") {
          this.toastr.success("Status Created Successfully.")
          this.router.navigate(['/Project/Status'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
