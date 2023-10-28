import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-newpriority',
  templateUrl: './newpriority.component.html',
  styleUrls: ['./newpriority.component.scss']
})
export class NewpriorityComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  remember_token:any
  constructor(private _PriorityService: PriorityService,private toastr: ToastrService, private router:Router) {
    this.remember_token = localStorage.getItem('TOKEN');
   }
  ngOnInit(): void {
  }
  submit(): void{
    this.item.remember_token  = this.remember_token;
    this._PriorityService.addNewPriority(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New Priority Created Successfully") {
          this.toastr.success("Status Priority Successfully.")
          this.router.navigate(['/Task/Priority'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
