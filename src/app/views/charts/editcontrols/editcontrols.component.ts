import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/Services/permission.service';
import { Helper } from 'src/app/helper';
@Component({
  selector: 'app-editcontrols',
  templateUrl: './editcontrols.component.html',
  styleUrls: ['./editcontrols.component.scss']
})
export class EditcontrolsComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  r_id:any;
  p_id:any;
  vdata:any;
  role:any;
  roles:any;
  pers:any[]=[];
  AllPermission:any;
  remember_token:any;
  permision_id :any;
  role_id:any;
  lang:any
  constructor(private _PermissionService: PermissionService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
    this.lang = localStorage.getItem("currentLang");
    if (this.lang == "ar") {
      this.lang = "rtl"
    }
    else{
      this.lang = "ltr"
    }
   }
   save(r_id:any)
   {
    this.item.role_id      = this.id;
    this.item.permision_id = r_id;

    this._PermissionService.storePivotData(this.item).subscribe((res:any) =>
    {
      if (res.message == "Data inserted successfully") {
        this.toastr.success("Data inserted successfully.")
        this.router.navigate(['/Roles/view',this.id]);
        setTimeout(() =>
        {
        location.reload();
        }, 500);
      }
      else{
        this.toastr.error("Record already exists.")
      }
    })

   }
   destroy(p_id:any)
   {
    this.item.role_id      = this.id;
    this.item.permision_id = p_id;
     this.item.remember_token  = this.remember_token;
     this._PermissionService.deletePivotData(Helper.toFormData(this.item)).subscribe((res:any) => {

       if (res.message == "Record deleted successfully") {
       }
       setTimeout(() =>
           {
           location.reload();
           }, 1000);
           this.toastr.error("Record deleted successfully.")
     })
   }
   ngOnInit(): void {
    this._PermissionService.getAllpermision().subscribe((res:any) =>
    {
     this.AllPermission = res.data;
    })
    this._PermissionService.getOneRole(this.id).subscribe((res:any) => {
      this.vdata = res.data.name;
      this.item.role = this.vdata;
      this._PermissionService.getpermision( Helper.toFormData(this.item)).subscribe(res=>{
        this.roles = res.data[0].permissions
        for (let i = 0; i < this.roles.length; i++) {
          this.pers.push(this.roles[i].name) ;
        }
      })
    })

  }
}
