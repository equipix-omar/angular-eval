import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newmangs',
  templateUrl: './newmangs.component.html',
  styleUrls: ['./newmangs.component.scss']
})
export class NewmangsComponent {
  id:any;
  constructor(private Active:ActivatedRoute
    )
    {
      this.id= Active.snapshot.paramMap.get("id")
    }
}
