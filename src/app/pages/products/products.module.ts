import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsListComponent} from './products-list/products-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NgbCollapseModule,
  NgbDropdown,
  NgbModule,
  NgbPaginationModule,
  NgbRatingModule,
  NgbTooltipModule
} from "@ng-bootstrap/ng-bootstrap";
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {AgmCoreModule} from "@agm/core";
import {SharedModule} from "../../shared/shared.module";
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from "ngx-swiper-wrapper";
import {FlatpickrModule} from "angularx-flatpickr";
import {SimplebarAngularModule} from "simplebar-angular";
import {SortByPipe} from "./sort-by.pipe";
import {DetailsComponent} from './details/details.component';
import {ListFiltersComponent} from './products-list/list-filters/list-filters.component';
import {NgxPaginationModule} from "ngx-pagination";


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    ProductsListComponent,
    SortByPipe,
    DetailsComponent,
    ListFiltersComponent
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
        SharedModule,
        SwiperModule,
        FlatpickrModule.forRoot(),
        SimplebarAngularModule,
        ProductsRoutingModule,
        NgbModule,
        NgxPaginationModule,
    ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    NgbDropdown
  ]
})
export class ProductsModule {
}
