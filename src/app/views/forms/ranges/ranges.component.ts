import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.scss']
})
export class RangesComponent {
  remember_token:any
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  isClicked=false
  ResponseMessage=""
  isUniuqeEmailMessage=""
  isUniuqeEmail=false
  isSuccess=false

constructor(private _AuthService:AuthService,private _Router:Router) {
  this.remember_token = localStorage.getItem('TOKEN');
 }
signUp=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)]),
})

 FormData()
 {
   this.isClicked=true
  if(this.signUp.valid)
  {
      this._AuthService.AddUser(this.signUp.value).subscribe(response=>{
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

