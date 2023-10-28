import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgesComponent } from './badges/badges.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastersComponent } from './toasters/toasters.component';
import { NewsectorComponent } from './newsector/newsector.component';
import { EditsectorComponent } from './editsector/editsector.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ToastersComponent,
      },
      {
        path: 'New',
        component: BadgesComponent,
      },
      {
        path: 'Edit/:id',
        component: ModalsComponent,
      },
      {
        path: 'sector',
        component: AlertsComponent,
      },
      {
        path: 'sector/New',
        component: NewsectorComponent,
      },
      {
        path: 'sector/Edit/:id',
        component: EditsectorComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
