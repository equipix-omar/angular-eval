import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import {SwiperComponent, SwiperDirective} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})

/**
 * Home2 Component
 */
export class Home2Component implements OnInit {


  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;


  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // Chat Data Get Function


    this.rentSelectData();

  }


  rentSelectData() {
    // Rent Select data
    document.getElementById("rent-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const rent = document.querySelector('.rent') as HTMLElement;
      rent.innerText = input.innerText;
    });

    // Location Select data
    document.getElementById("location-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
    });

    // Property Select data
    document.getElementById("property-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const property = document.querySelector('.property') as HTMLElement;
      property.innerText = input.innerText;
    });
  }

}
