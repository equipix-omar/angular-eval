import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NgbCarouselModule,
  NgbCollapseModule,
  NgbNavModule,
  NgbProgressbarModule,
  NgbRatingModule,
  NgbTooltipModule
} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";
import {AgmCoreModule} from "@agm/core";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {SwiperModule} from "ngx-swiper-wrapper";
import {ContactInfoComponent} from './checkout/contact-info/contact-info.component';
import {PickupDeliveryComponent} from './checkout/pickup-delivery/pickup-delivery.component';
import {BillingInfoComponent} from './checkout/billing-info/billing-info.component';
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import { EquipixAccountComponent } from './checkout/equipix-account/equipix-account.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { CompleteOrderComponent } from './checkout/complete-order/complete-order.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    ContactInfoComponent,
    PickupDeliveryComponent,
    BillingInfoComponent,
    EquipixAccountComponent,
    CartSummaryComponent,
    CompleteOrderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbCarouselModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwVybKQjx4275F6weM_eTmDwJ9GG8VGh4',
      libraries: ['places']
    }),
    DropzoneModule,
    SwiperModule,
    GooglePlaceModule
  ]
})
export class CheckoutModule {
}
