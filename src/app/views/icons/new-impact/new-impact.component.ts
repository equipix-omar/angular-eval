import { EventService } from 'src/app/Services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Helper } from 'src/app/helper';
@Component({
  selector: 'app-new-impact',
  templateUrl: './new-impact.component.html',
  styleUrls: ['./new-impact.component.scss']
})
export class NewImpactComponent {

  helper: any = Helper;
  item: any = {};
  name:any;
  remember_token:any
  constructor(private _EventService: EventService,private toastr: ToastrService, private router:Router) {
    this.remember_token = localStorage.getItem('TOKEN');
   }
  ngOnInit(): void {
  }
  submit(): void{
    this.item.remember_token  = this.remember_token;
    this._EventService.addNewImpact(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New Impact Created Successfully") {
          this.toastr.success("New Impact Created Successfully.")
          this.router.navigate(['/Risk/Impact'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
