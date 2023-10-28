import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/Services/permission.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-newpermission',
  templateUrl: './newpermission.component.html',
  styleUrls: ['./newpermission.component.scss']
})
export class NewpermissionComponent {

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
    this._PermissionService.addpermision(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New permision Created Successfully") {
          this.toastr.success("New permision Created Successfully.")
          this.router.navigate(['Roles/Permissions'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
