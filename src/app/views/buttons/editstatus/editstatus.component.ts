import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-editstatus',
  templateUrl: './editstatus.component.html',
  styleUrls: ['./editstatus.component.scss']
})
export class EditstatusComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  data:any[] = [];
  remember_token:any;
  constructor(private _StatusService: StatusService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
   }
   ngOnInit(): void {
    this._StatusService.getOneTaskStatus(this.id).subscribe((res:any) => {
      this.data.push(res.data)
    })
  }
  AddNote = new FormGroup({
    name: new FormControl("", Validators.required),
  });
  editNote()
  {
    let data={
      name:this.AddNote.value.name,
      remember_token:this.remember_token,
    }
    this.item.remember_token  = this.remember_token;
    this._StatusService.editTaskStatus(this.id, data).subscribe((res)=>
    {
      if (res.message == "Status Updated Successfully") {
        this.toastr.success("Status Updated Successfully.")
        this.router.navigate(['/Task/Status'])
      }
      else{
        this.toastr.error("Please Enter All Feild.")
      }
    }
  )
  }
}
