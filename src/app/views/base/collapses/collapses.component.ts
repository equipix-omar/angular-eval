import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-collapses',
  templateUrl: './collapses.component.html',
  styleUrls: ['./collapses.component.scss']
})
export class CollapsesComponent {


  id:any;
  data:any;
  constructor(private _ProjectService:ProjectService, Active:ActivatedRoute, private router:Router)
  {
    this.id= Active.snapshot.paramMap.get("id")
   }
  ngOnInit(): void {
    this._ProjectService.getOneProject(this.id).subscribe((res:any) => {
      this.data = res.data
    })

  }
}
