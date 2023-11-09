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
import { authGuard } from 'src/app/auth.guard';

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
        canActivate:[authGuard,],

      },
      {
        path: 'RiskType/New',
        component: NewrisktypeComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'RiskType/Edit/:id',
        component: EditrisktypeComponent,
        canActivate:[authGuard,],

      },

      {
        path: 'Impact',
        component: ImpactComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Impact/New',
        component: NewImpactComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Impact/Edit/:id',
        component: EditImpactComponent,
        canActivate:[authGuard,],

      },

      {
        path: 'occurrence',
        component: OccurrenceComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'occurrence/New',
        component: NewoccurrenceComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'occurrence/Edit/:id',
        component: EditoccurrenceComponent,
        canActivate:[authGuard,],

      },

      {
        path: 'Inherent',
        component: InherentComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Inherent/New',
        component: NewInherentComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Inherent/Edit/:id',
        component: EditInherentComponent,
        canActivate:[authGuard,],

      },




      {
        path: 'ResidualImpact',
        component: ResidualImpactComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'ResidualImpact/New',
        component: NewResidualImpactComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'ResidualImpact/Edit/:id',
        component: EditResidualImpactComponent,
        canActivate:[authGuard,],

      },

      {
        path: 'Residualoccurrence',
        component: ResidualoccurrenceComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Residualoccurrence/New',
        component: NewResidualoccurrenceComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Residualoccurrence/Edit/:id',
        component: EditResidualoccurrenceComponent,
        canActivate:[authGuard,],

      },

      {
        path: 'ResidualInherent',
        component: ResidualInherentComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'ResidualInherent/New',
        component: NewResidualInherentComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'ResidualInherent/Edit/:id',
        component: EditResidualInherentComponent,
        canActivate:[authGuard,],

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
