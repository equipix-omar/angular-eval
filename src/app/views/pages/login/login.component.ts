import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  item: any = {};
  helper: any = Helper;
  role:any;
  roles:any;
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  ress:boolean = false;
  constructor(private _AuthService:AuthService,private _Router:Router ,   private toastr: ToastrService)
  {
    if (localStorage.getItem("TOKEN") ) {
      this._Router.navigate(['/dashboard'])

    }
   }
    signIn=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
   })
   FormData()
   {
    if(this.signIn.valid)
    {
    this._AuthService.signIn(this.signIn.value).subscribe(res=>{

      if(res.status == 404)
      {
        this.toastr.error("credentials are not correct.")
      }
       else
       {
        localStorage.setItem("TOKEN",res.UserInfo.remember_token);
        setTimeout(() =>
        {
        location.reload();
        }, 1000);
        if ( localStorage.getItem("TOKEN")) {
          this._Router.navigate(['/dashboard'])
        }
        localStorage.setItem("UserId",res.UserInfo.id);
        localStorage.setItem("RoleName",res.UserInfo.role['name']);
       }

    })
    }
   }
  ngOnInit(): void
   {

   }

}

