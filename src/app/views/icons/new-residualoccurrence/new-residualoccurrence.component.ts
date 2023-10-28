import { EventService } from 'src/app/Services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-new-residualoccurrence',
  templateUrl: './new-residualoccurrence.component.html',
  styleUrls: ['./new-residualoccurrence.component.scss']
})
export class NewResidualoccurrenceComponent {

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
    this._EventService.addNewResOccurrence(Helper.toFormData(this.item)).subscribe((res)=>
      {
        if (res.message == "New occurrence Created Successfully") {
          this.toastr.success("New occurrence Created Successfully.")
          this.router.navigate(['/Risk/Residualoccurrence'])
        }
        else{
          this.toastr.error("Please Enter All Feild.")
        }
      }
    )}

}
