import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/Services/permission.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-newroles',
  templateUrl: './newroles.component.html',
  styleUrls: ['./newroles.component.scss']
})
export class NewrolesComponent {

  helper: any = Helper;
  item: any = {};
  name:any;
  remember_token:any
  constructor(private _PermissionService: PermissionService,private toastr: ToastrService, private router:Router) {
    this.remember_token = localStorage.getItem('TOKEN');
   }
  ngOnInit(): void {
  }
  submit(): void{
    this.item.remember_token  = this.remember_token;
    this._PermissionService.addRole(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New role Created Successfully") {
          this.toastr.success("New role Created Successfully.")
          this.router.navigate(['/Roles'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
