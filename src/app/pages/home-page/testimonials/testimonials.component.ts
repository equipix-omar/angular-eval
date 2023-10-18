import {Component, OnInit} from '@angular/core';
import {customersData} from './data';
import {customers} from "./customers";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  customersData!: customers[];

  customers = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    spaceBetween: 25,
  };

  constructor() {
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.customersData = customersData;
  }

}
