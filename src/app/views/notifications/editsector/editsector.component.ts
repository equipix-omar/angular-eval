import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/Services/event.service';
import { SectorService } from 'src/app/Services/sector.service';
import { Helper } from 'src/app/helper';
@Component({
  selector: 'app-editsector',
  templateUrl: './editsector.component.html',
  styleUrls: ['./editsector.component.scss']
})
export class EditsectorComponent {
  helper: any = Helper;
  item: any = {};
  name:any;
  id:any;
  data:any[] = [];
  remember_token:any;
  constructor(private _EventService: SectorService,private toastr: ToastrService, private router:Router
    , private Active:ActivatedRoute) {
    this.id= Active.snapshot.paramMap.get("id")
    this.remember_token = localStorage.getItem('TOKEN');
   }
   ngOnInit(): void {
    this._EventService.Getsector(this.id).subscribe((res:any) => {
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
    this._EventService.Editsector(this.id, data).subscribe((res)=>
    {
      if (res.message == "Status Updated Successfully") {
        this.toastr.success("Status Updated Successfully.")
        this.router.navigate(['/Management/sector'])
      }
      else{
        this.toastr.error("Please Enter All Feild.")
      }
    }
  )
  }

}
