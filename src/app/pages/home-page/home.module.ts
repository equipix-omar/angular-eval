import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Home1Component} from './home1/home1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbDropdownModule, NgbNavModule, NgbProgressbarModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

// Ngx Sliders
import {NgxSliderModule} from '@angular-slider/ngx-slider';

// Swiper Slider
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';

// Modules
import {SharedModule} from "../../shared/shared.module";
import {Home2Component} from './home2/home2.component';
import {SliderComponent} from './slider/slider.component';
import {CategoryFilterComponent} from './slider/category-filter/category-filter.component';
import {LocationFilterComponent} from './slider/location-filter/location-filter.component';
import {EndDateFilterComponent} from './slider/end-date-filter/end-date-filter.component';
import {StartDateFilterComponent} from './slider/start-date-filter/start-date-filter.component';
import {FeaturesComponent} from './features/features.component';
import {NewlyListedPropertiesComponent} from './newly-listed-properties/newly-listed-properties.component';
import {DiscoverLocationsComponent} from './discover-locations/discover-locations.component';
import {TopPropertiesComponent} from './top-properties/top-properties.component';
import {FindYourAgentComponent} from './find-your-agent/find-your-agent.component';
import {BlogRecentComponent} from './blog-recent/blog-recent.component';
import {PagerComponent} from './pager/pager.component';
import {WhyChooseUsComponent} from './why-choose-us/why-choose-us.component';
import {OurPartnersComponent} from './our-partners/our-partners.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {HomeCategoriesComponent} from './home-categories/home-categories.component';
import {DashboardsRoutingModule} from "./home-routing.module";
import {FlatpickrModule} from "angularx-flatpickr";


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    Home1Component,
    Home2Component,
    SliderComponent,
    CategoryFilterComponent,
    LocationFilterComponent,
    EndDateFilterComponent,
    StartDateFilterComponent,
    FeaturesComponent,
    NewlyListedPropertiesComponent,
    DiscoverLocationsComponent,
    TopPropertiesComponent,
    FindYourAgentComponent,
    BlogRecentComponent,
    PagerComponent,
    WhyChooseUsComponent,
    OurPartnersComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    HomeCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgxSliderModule,
    DashboardsRoutingModule,
    SharedModule,
    SwiperModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule {
}
