import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, PaginationModule, SharedModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { PermissionComponent } from './permission/permission.component';
import { NewpermissionComponent } from './newpermission/newpermission.component';
import { EditpermissionComponent } from './editpermission/editpermission.component';
import { RolesComponent } from './roles/roles.component';
import { NewrolesComponent } from './newroles/newroles.component';
import { EditrolesComponent } from './editroles/editroles.component';
import { ControlsComponent } from './controls/controls.component';
import { NewcontrolsComponent } from './newcontrols/newcontrols.component';
import { EditcontrolsComponent } from './editcontrols/editcontrols.component';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { IconModule } from '@coreui/icons-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ChartsComponent, PermissionComponent, NewpermissionComponent, EditpermissionComponent, RolesComponent, NewrolesComponent, EditrolesComponent, ControlsComponent, NewcontrolsComponent, EditcontrolsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule,
    DataTablesModule,
    IconModule,
    ButtonModule,
    DropdownModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    FormModule,
    ListGroupModule,
    PaginationModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule.forChild({
      extend: true
    }),
  ]
})
export class ChartsModule {
}
