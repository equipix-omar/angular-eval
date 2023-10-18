import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbCollapseModule, NgbPaginationModule, NgbRatingModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

// Youtube Player
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

// Ngx Sliders
import {NgxSliderModule} from '@angular-slider/ngx-slider';

// Google Map
import {AgmCoreModule} from '@agm/core';

// Swiper Slider
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';

// Flat Picker
import {FlatpickrModule} from 'angularx-flatpickr';

// Simplebar
import {SimplebarAngularModule} from 'simplebar-angular';

// Component
import {CatalogRoutingModule} from "./catalog-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {RentComponent} from './rent/rent.component';
import {SingleV1Component} from './single-v1/single-v1.component';
import {SingleV2Component} from './single-v2/single-v2.component';
import {SaleComponent} from './sale/sale.component';
import {SortByPipe} from './sort-by.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    RentComponent,
    SingleV1Component,
    SingleV2Component,
    SaleComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgxYoutubePlayerModule,
    NgxSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    CatalogRoutingModule,
    SharedModule,
    SwiperModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class CatalogModule { }
