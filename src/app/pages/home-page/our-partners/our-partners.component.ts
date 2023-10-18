import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper.service";

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {

  constructor(protected helperService: HelperService) {
  }

  ngOnInit(): void {
  }

  partners = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: true,
    loop: true,
    breakpoints:{
      768:{
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 6,
      }
    }
  };
}
