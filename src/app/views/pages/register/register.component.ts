import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  helper: any = Helper;
  item: any = {};
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  submit()
   {
    {
        this._AuthService.signUp(Helper.toFormData(this.item)).subscribe(response=>{
          localStorage.setItem("UserId",response.data.id);
        if(response.status == 200)
        {
          localStorage.setItem("TOKEN",response.remember_token);
          setTimeout(() =>
          {
          location.reload();
          }, 1000);
          if ( localStorage.getItem("TOKEN")) {
            this._Router.navigate(['/dashboard'])
          }
        }

      })
    }
   }

}
