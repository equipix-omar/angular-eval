import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FlatpickrModule} from "angularx-flatpickr";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    NgbDropdown
  ]
})
export class CartModule {
}
