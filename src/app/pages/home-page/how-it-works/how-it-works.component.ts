import {Component, OnInit} from '@angular/core';
import {works} from "./works";
import {worksData} from './data';
import {HelperService} from "../../../core/services/helper.service";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  worksData!: works[];

  constructor(protected helperService: HelperService) {
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.worksData = worksData;
  }
}
