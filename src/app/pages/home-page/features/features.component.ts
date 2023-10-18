import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper.service";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(protected helperService: HelperService) {
  }

  ngOnInit(): void {
  }

}
