import { EventService } from 'src/app/Services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-new-residual-inherent',
  templateUrl: './new-residual-inherent.component.html',
  styleUrls: ['./new-residual-inherent.component.scss']
})
export class NewResidualInherentComponent {


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
    this._EventService.addNewResInherent(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New Inherent risk Created Successfully") {
          this.toastr.success("New Inherent risk Created Successfully.")
          this.router.navigate(['/Risk/ResidualInherent'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}

