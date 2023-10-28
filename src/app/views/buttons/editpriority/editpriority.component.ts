import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PriorityService } from 'src/app/Services/priority.service';
import { StatusService } from 'src/app/Services/status.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-editpriority',
  templateUrl: './editpriority.component.html',
  styleUrls: ['./editpriority.component.scss']
})
export class EditpriorityComponent {

  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  data:any[] = [];
  remember_token:any;
  constructor(private _PriorityService: PriorityService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
   }
   ngOnInit(): void {
    this._PriorityService.getOnePriority(this.id).subscribe((res:any) => {
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
    this._PriorityService.editPriority(this.id, data).subscribe((res)=>
    {
      if (res.message == "Priority Updated Successfully") {
        this.toastr.success("Priority Updated Successfully.")
        this.router.navigate(['/Task/Priority'])
      }
      else{
        this.toastr.error("Please Enter All Feild.")
      }
    }
  )
  }
}
