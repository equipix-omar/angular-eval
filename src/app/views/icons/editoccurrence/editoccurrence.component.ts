import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/Services/event.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-editoccurrence',
  templateUrl: './editoccurrence.component.html',
  styleUrls: ['./editoccurrence.component.scss']
})
export class EditoccurrenceComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  data:any[] = [];
  remember_token:any;
  constructor(private _EventService: EventService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
   }
   ngOnInit(): void {
    this._EventService.getOneOccurrence(this.id).subscribe((res:any) => {
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
    this._EventService.editOccurrence(this.id, data).subscribe((res)=>
    {
      if (res.message == "occurrence Updated Successfully") {
        this.toastr.success("occurrence Updated Successfully.")
        this.router.navigate(['/Risk/occurrence'])
      }
      else{
        this.toastr.error("Please Enter All Feild.")
      }
    }
  )
  }

}