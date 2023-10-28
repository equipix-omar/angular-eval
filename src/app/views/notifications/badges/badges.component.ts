import { EventService } from 'src/app/Services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Helper } from 'src/app/helper';
import { SectorService } from 'src/app/Services/sector.service';
import { ManagementService } from 'src/app/Services/management.service';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

  helper: any = Helper;
  item: any = {};
  name:any;
  remember_token:any
  constructor(private _sector: ManagementService,private toastr: ToastrService, private router:Router) {
    this.remember_token = localStorage.getItem('TOKEN');
   }
  ngOnInit(): void {
  }
  submit(): void{
    this.item.remember_token  = this.remember_token;
    this._sector.Addmanagement(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New Status Created Successfully") {
          this.toastr.success("New Status Created Successfully.")
          this.router.navigate(['/Management'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}

