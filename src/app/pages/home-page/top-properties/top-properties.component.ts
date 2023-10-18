import {Component, OnInit} from '@angular/core';
import {finder} from "../home2/home2.model";
import {finderData} from '../home2/data';

@Component({
  selector: 'app-top-properties',
  templateUrl: './top-properties.component.html',
  styleUrls: ['./top-properties.component.scss']
})
export class TopPropertiesComponent implements OnInit {

  finderData!: finder[];

  /**
   * Top properties on Finder
   */
  Finder = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.finderData = finderData;
  }
}
