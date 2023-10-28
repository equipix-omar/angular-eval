import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {


  id:any;
  data:any;
  constructor(private _AuthService:AuthService, Active:ActivatedRoute, private router:Router)
  {
    this.id= Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this._AuthService.getOneUser(this.id).subscribe((res:any) => {
      this.data = res.data
    })

  }
}

