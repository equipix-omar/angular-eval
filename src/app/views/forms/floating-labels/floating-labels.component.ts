import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { PermissionService } from 'src/app/Services/permission.service';

@Component({
  selector: 'app-floating-labels',
  templateUrl: './floating-labels.component.html',
  styleUrls: ['./floating-labels.component.scss']
})
export class FloatingLabelsComponent {
id:any;
item: any = {};
data:any[] = [];
roles:any;
remember_token:any
isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
isStyleValid={'background-color':'gray','border-color':'gray'}
isClicked=false
ResponseMessage=""
isUniuqeEmailMessage=""
isUniuqeEmail=false
isSuccess=false

constructor(private _AuthService:AuthService,private _Router:Router,private Active:ActivatedRoute,
  private permisionService: PermissionService) {
this.remember_token = localStorage.getItem('TOKEN');
this.id= Active.snapshot.paramMap.get("id")

}
signUp=new FormGroup({
name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
email:new FormControl('',[Validators.required,Validators.email]),
role_id:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)]),
})
ngOnInit(): void {
  this._AuthService.getOneUser(this.id).subscribe((res:any) => {
    this.data.push(res.data)
  })
  this.permisionService.getAllrole().subscribe((res:any) => {
    this.roles = res.data

  })
}
FormData()
{
 this.isClicked=true
if(this.signUp.valid)
{
    this._AuthService.editUser(this.id ,this.signUp.value).subscribe(response=>{
    if(response.status == 200)
    {
      this.isClicked=false
      this.isSuccess=true
      this.isUniuqeEmail=false
      this.ResponseMessage=response.message
      this._Router.navigate(['/User'])

    }else
    {
      this.isUniuqeEmailMessage=response.message
      this.isUniuqeEmail=true
      this.isSuccess=false
      this.isClicked=false
    }
  })
}
}

}

