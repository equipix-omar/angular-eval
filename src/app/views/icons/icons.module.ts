import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, CollapseModule, DropdownModule, GridModule, ListGroupModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { IconsRoutingModule } from './icons-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { GridComponent } from './grid/grid.component';
import { HotTableModule } from '@handsontable/angular';
import { OccurrenceComponent } from './occurrence/occurrence.component';
import { ImpactComponent } from './impact/impact.component';
import { InherentComponent } from './inherent/inherent.component';
import { RisktypeComponent } from './risktype/risktype.component';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { MatInputModule } from '@angular/material/input';
import { NewrisktypeComponent } from './newrisktype/newrisktype.component';
import { EditrisktypeComponent } from './editrisktype/editrisktype.component';
import { NewInherentComponent } from './new-inherent/new-inherent.component';
import { EditInherentComponent } from './edit-inherent/edit-inherent.component';
import { NewImpactComponent } from './new-impact/new-impact.component';
import { EditImpactComponent } from './edit-impact/edit-impact.component';
import { NewoccurrenceComponent } from './newoccurrence/newoccurrence.component';
import { EditoccurrenceComponent } from './editoccurrence/editoccurrence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidualImpactComponent } from './residual-impact/residual-impact.component';
import { NewResidualImpactComponent } from './new-residual-impact/new-residual-impact.component';
import { EditResidualImpactComponent } from './edit-residual-impact/edit-residual-impact.component';
import { ResidualoccurrenceComponent } from './residualoccurrence/residualoccurrence.component';
import { NewResidualoccurrenceComponent } from './new-residualoccurrence/new-residualoccurrence.component';
import { EditResidualoccurrenceComponent } from './edit-residualoccurrence/edit-residualoccurrence.component';
import { ResidualInherentComponent } from './residual-inherent/residual-inherent.component';
import { NewResidualInherentComponent } from './new-residual-inherent/new-residual-inherent.component';
import { EditResidualInherentComponent } from './edit-residual-inherent/edit-residual-inherent.component';
import { SheetsComponent } from './sheets/sheets.component';
import { RatesComponent } from './rates/rates.component';
import { CrmComponent } from './crm/crm.component';
import { NewcrmComponent } from './newcrm/newcrm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NotesComponent } from '../base/notes/notes.component';
import { NewnoteComponent } from '../base/newnote/newnote.component';
import { NotesComponentr } from './notes/notes.component';
import { NewnoteComponentr } from './newnote/newnote.component';

@NgModule({
  imports: [
    IconsRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    HotTableModule,
    DataTablesModule,
    MatInputModule,
    ButtonModule,
    ListGroupModule,
    CollapseModule,
    DropdownModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true
    }),
  ],
  declarations: [
    GridComponent,
    OccurrenceComponent,
    ImpactComponent,
    InherentComponent,
    RisktypeComponent,
    NewrisktypeComponent,
    EditrisktypeComponent,
    NewInherentComponent,
    EditInherentComponent,
    NewImpactComponent,
    EditImpactComponent,
    NewoccurrenceComponent,
    EditoccurrenceComponent,
    ResidualImpactComponent,
    NewResidualImpactComponent,
    EditResidualImpactComponent,
    ResidualoccurrenceComponent,
    NewResidualoccurrenceComponent,
    EditResidualoccurrenceComponent,
    ResidualInherentComponent,
    NewResidualInherentComponent,
    EditResidualInherentComponent,
    NotesComponentr,
    SheetsComponent,
    RatesComponent,
    CrmComponent,
    NewcrmComponent,
    NewnoteComponentr
  ]
})
export class IconsModule {
}
