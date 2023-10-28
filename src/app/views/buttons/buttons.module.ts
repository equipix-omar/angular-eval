import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  PaginationModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { StatusComponent } from './status/status.component';
import { PriorityComponent } from './priority/priority.component';
import { ViewComponent } from './view/view.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { ViewpriorityComponent } from './viewpriority/viewpriority.component';
import { EditpriorityComponent } from './editpriority/editpriority.component';
import { EditstatusComponent } from './editstatus/editstatus.component';
import { NewstatusComponent } from './newstatus/newstatus.component';
import { NewpriorityComponent } from './newpriority/newpriority.component';
import { MatSelectModule } from '@angular/material/select';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonGroupsComponent,
    DropdownsComponent,
    StatusComponent,
    PriorityComponent,
    ViewComponent,
    ViewstatusComponent,
    ViewpriorityComponent,
    EditpriorityComponent,
    EditstatusComponent,
    NewstatusComponent,
    NewpriorityComponent,
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
    DataTablesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSliderModule,
    PaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    KanbanModule,
    TranslateModule.forChild({
      extend: true
    }),
  ],
  providers: [DatePipe],

})
export class ButtonsModule {
}
