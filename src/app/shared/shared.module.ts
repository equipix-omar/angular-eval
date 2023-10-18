import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

// Component
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SignInComponent} from './header/sign-in/sign-in.component';
import {SignUpComponent} from './header/sign-up/sign-up.component';
import {NgxMaskModule} from "ngx-mask";
import {CommonInputComponent} from "./forms/common-input/common-input.component";
import {CommonInputGroupComponent} from "./forms/common-input-group/common-input-group.component";
import {CommonSelectComponent} from "./forms/common-select/common-select.component";
import {CommonSwitchInputComponent} from "./forms/common-switch-input/common-switch-input.component";
import {CommonTextareaComponent} from "./forms/common-textarea/common-textarea.component";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import {PositionDialogComponent} from './position-dialog/position-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SignInComponent,
    SignUpComponent,

    CommonInputComponent,
    CommonInputGroupComponent,
    CommonSelectComponent,
    CommonSwitchInputComponent,
    CommonTextareaComponent,
    PositionDialogComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    ScrollToModule,
    NgxMaskModule.forRoot(),
    GooglePlaceModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,

    CommonInputComponent,
    CommonInputGroupComponent,
    CommonSelectComponent,
    CommonSwitchInputComponent,
    CommonTextareaComponent,
    PositionDialogComponent,

  ],
  entryComponents: [
    PositionDialogComponent
  ]


})
export class SharedModule { }
