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
file: any;

constructor(private _AuthService:AuthService,private _Router:Router,private Active:ActivatedRoute) {
this.remember_token = localStorage.getItem('TOKEN');
this.id= Active.snapshot.paramMap.get("id")
}
signUp=new FormGroup({
image:new FormControl('',[Validators.required]),
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

 // console.log(this.signUp.value);
  this._AuthService.EditProfile(this.file,this.id).subscribe(response=>{
    if(response.status == 200)
    {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
      this._Router.navigate(['/User/View',this.id])
    }
  })

}

}

