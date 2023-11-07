import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
helper: any = Helper;
id:any;
item: any = {};
data:any[] = [];
remember_token:any
isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
isStyleValid={'background-color':'gray','border-color':'gray'}
isClicked=false
ResponseMessage=""
isUniuqeEmailMessage=""
isUniuqeEmail=false
isSuccess=false
file: any;

constructor(private _AuthService:AuthService,private _Router:Router,private Active:ActivatedRoute) {
this.remember_token = localStorage.getItem('TOKEN');
this.id= Active.snapshot.paramMap.get("id")

}
signUp=new FormGroup({
//name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
//email:new FormControl('',[Validators.required,Validators.email]),
image:new FormControl('',[Validators.required]),
//password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)]),
})
ngOnInit(): void {
  this._AuthService.getOneUser(this.id).subscribe((res:any) => {
    this.data.push(res.data)
  })
}
onChange(event: any) {
  this.file = event.target.files[0];
}
FormData()
{

  console.log(this.signUp.value);
  this._AuthService.EditProfile(this.file).subscribe(response=>{
    if(response.status == 200)
    {
      this.isClicked=false
      this.isSuccess=true
      this.isUniuqeEmail=false
      this.ResponseMessage=response.message
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
      this._Router.navigate(['/User/View',this.id])

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

