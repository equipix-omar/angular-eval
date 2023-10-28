import { EditResidualoccurrenceComponent } from './edit-residualoccurrence/edit-residualoccurrence.component';
import { ResidualImpactComponent } from './residual-impact/residual-impact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { RisktypeComponent } from './risktype/risktype.component';
import { ImpactComponent } from './impact/impact.component';
import { OccurrenceComponent } from './occurrence/occurrence.component';
import { InherentComponent } from './inherent/inherent.component';
import { NewrisktypeComponent } from './newrisktype/newrisktype.component';
import { EditrisktypeComponent } from './editrisktype/editrisktype.component';
import { NewImpactComponent } from './new-impact/new-impact.component';
import { EditImpactComponent } from './edit-impact/edit-impact.component';
import { NewoccurrenceComponent } from './newoccurrence/newoccurrence.component';
import { EditoccurrenceComponent } from './editoccurrence/editoccurrence.component';
import { NewInherentComponent } from './new-inherent/new-inherent.component';
import { EditInherentComponent } from './edit-inherent/edit-inherent.component';
import { NewResidualImpactComponent } from './new-residual-impact/new-residual-impact.component';
import { EditResidualImpactComponent } from './edit-residual-impact/edit-residual-impact.component';
import { ResidualoccurrenceComponent } from './residualoccurrence/residualoccurrence.component';
import { NewResidualoccurrenceComponent } from './new-residualoccurrence/new-residualoccurrence.component';
import { ResidualInherentComponent } from './residual-inherent/residual-inherent.component';
import { NewResidualInherentComponent } from './new-residual-inherent/new-residual-inherent.component';
import { EditResidualInherentComponent } from './edit-residual-inherent/edit-residual-inherent.component';
import { NotesComponentr } from './notes/notes.component';
import { SheetsComponent } from './sheets/sheets.component';
import { RatesComponent } from './rates/rates.component';
import { CrmComponent } from './crm/crm.component';
import { NewcrmComponent } from './newcrm/newcrm.component';
import { NewnoteComponentr } from './newnote/newnote.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   component: SheetsComponent,
      // },
      // {
      //   path: 'rate',
      //   pathMatch: 'full',
      //   component: RatesComponent,
      // },
      // {
      //   path: 'Note',
      //   pathMatch: 'full',
      //   component: NotesComponentr,
      // },
      // {
      //   path: 'Note/New',
      //   pathMatch: 'full',
      //   component: NewnoteComponentr,
      // },
      // {
      //   path: 'Rcm',
      //   pathMatch: 'full',
      //   component: CrmComponent,
      // },
      // {
      //   path: 'Rcm/New',
      //   pathMatch: 'full',
      //   component: NewcrmComponent,
      // },
      {
        path: 'RiskType',
        component: RisktypeComponent,
      },
      {
        path: 'RiskType/New',
        component: NewrisktypeComponent
      },
      {
        path: 'RiskType/Edit/:id',
        component: EditrisktypeComponent
      },

      {
        path: 'Impact',
        component: ImpactComponent,
      },
      {
        path: 'Impact/New',
        component: NewImpactComponent
      },
      {
        path: 'Impact/Edit/:id',
        component: EditImpactComponent
      },

      {
        path: 'occurrence',
        component: OccurrenceComponent,
      },
      {
        path: 'occurrence/New',
        component: NewoccurrenceComponent
      },
      {
        path: 'occurrence/Edit/:id',
        component: EditoccurrenceComponent
      },

      {
        path: 'Inherent',
        component: InherentComponent,
      },
      {
        path: 'Inherent/New',
        component: NewInherentComponent
      },
      {
        path: 'Inherent/Edit/:id',
        component: EditInherentComponent
      },




      {
        path: 'ResidualImpact',
        component: ResidualImpactComponent,
      },
      {
        path: 'ResidualImpact/New',
        component: NewResidualImpactComponent
      },
      {
        path: 'ResidualImpact/Edit/:id',
        component: EditResidualImpactComponent
      },

      {
        path: 'Residualoccurrence',
        component: ResidualoccurrenceComponent,
      },
      {
        path: 'Residualoccurrence/New',
        component: NewResidualoccurrenceComponent
      },
      {
        path: 'Residualoccurrence/Edit/:id',
        component: EditResidualoccurrenceComponent
      },

      {
        path: 'ResidualInherent',
        component: ResidualInherentComponent,
      },
      {
        path: 'ResidualInherent/New',
        component: NewResidualInherentComponent
      },
      {
        path: 'ResidualInherent/Edit/:id',
        component: EditResidualInherentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {
}
