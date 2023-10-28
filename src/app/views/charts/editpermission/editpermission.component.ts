import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/Services/permission.service';
import { Helper } from 'src/app/helper';
@Component({
  selector: 'app-editpermission',
  templateUrl: './editpermission.component.html',
  styleUrls: ['./editpermission.component.scss']
})
export class EditpermissionComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  data:any[] = [];
  remember_token:any;
  constructor(private _PermissionService: PermissionService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
   }
   ngOnInit(): void {
    this._PermissionService.getOnepermision(this.id).subscribe((res:any) => {
      this.data.push(res.data)
    })
  }

  AddNote = new FormGroup({
    name: new FormControl("", Validators.required),
  });
  editNote()
  {
    let data={
      name:this.AddNote.value.name,
      remember_token:this.remember_token,

    }
    this.item.remember_token  = this.remember_token;
    this._PermissionService.editpermision(this.id, data).subscribe((res)=>
    {
      if (res.message == "permision Updated Successfully") {
        this.toastr.success("permision Updated Successfully.")
        this.router.navigate(['/Roles/Permissions'])
      }
      else{
        this.toastr.error("Please Enter All Feild.")
      }
    }
  )
  }

}
