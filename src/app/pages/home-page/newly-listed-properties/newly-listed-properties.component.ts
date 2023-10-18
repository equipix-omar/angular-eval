import {Component, OnInit} from '@angular/core';
import {properties} from "../home2/home2.model";
import {propertiesData} from '../home2/data';

@Component({
  selector: 'app-newly-listed-properties',
  templateUrl: './newly-listed-properties.component.html',
  styleUrls: ['./newly-listed-properties.component.scss']
})
export class NewlyListedPropertiesComponent implements OnInit {

  propertiesData!: properties[];

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true
  };

  constructor() {
  }

  ngOnInit(): void {
    this._fetchData();
  }


  private _fetchData() {
    this.propertiesData = propertiesData;
  }
}
