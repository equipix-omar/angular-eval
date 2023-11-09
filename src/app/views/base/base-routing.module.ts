import { roleGuardGuard } from './../../role-guard.guard';
import { DiscusComponent } from './discus/discus.component';
import { authGuard } from './../../auth.guard';
import { Auth } from './../../auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionsComponent } from './accordion/accordions.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { NavsComponent } from './navs/navs.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TablesComponent } from './tables/tables.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { FormControlsComponent } from '../forms/form-controls/form-controls.component';
import { FileComponent } from './file/file.component';
import { NotesComponent } from './notes/notes.component';
import { NewdiscucComponent } from './newdiscuc/newdiscuc.component';
import { Newdiscuc2Component } from './newdiscuc2/newdiscuc2.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { Newnote2Component } from './newnote2/newnote2.component';
import { AuthService } from 'src/app/Services/auth.service';
import { Helper } from 'src/app/helper';
import { CrmComponent } from '../icons/crm/crm.component';
import { NewcrmComponent } from '../icons/newcrm/newcrm.component';
import { RatesComponent } from '../icons/rates/rates.component';
import { SheetsComponent } from '../icons/sheets/sheets.component';
import { NotesComponentr } from '../icons/notes/notes.component';
import { NewnoteComponentr } from '../icons/newnote/newnote.component';
import { ManagementComponent } from './management/management.component';
import { NewmangsComponent } from './newmangs/newmangs.component';
import { InhiritedComponent } from './inhirited/inhirited.component';
import { NewinhiritedComponent } from './newinhirited/newinhirited.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CardsComponent,
        canActivate:[authGuard,],
      //   data:{
      //     expectedRoles:['view project']
      // },
      },
      {
        path: 'Risk/:id',
        pathMatch: 'full',
        component: SheetsComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/:id/rate',
        pathMatch: 'full',
        component: RatesComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Note/:id',
        pathMatch: 'full',
        component: CrmComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Note/:id/New',
        pathMatch: 'full',
        component: NewcrmComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Rcm/:id',
        pathMatch: 'full',
        component: NotesComponentr,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Rcm/:id/New',
        pathMatch: 'full',
        component: NewnoteComponentr,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Inhirited/:id',
        pathMatch: 'full',
        component: InhiritedComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'Risk/Inhirited/:id/New',
        pathMatch: 'full',
        component: NewinhiritedComponent,
        canActivate:[authGuard,],

      },
      {
        path: 'NewProject',
        component: CarouselsComponent
        ,canActivate:[authGuard],
      },
      {
        path: 'EditProject/:id',
        component: TablesComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'View/:id',
        component: CollapsesComponent
        ,canActivate:[authGuard],
        children: [
          {
            path: '',
            component: PlaceholdersComponent
            ,canActivate:[authGuard],
          },
          {
            path: '',
            component: PaginationsComponent
            ,canActivate:[authGuard],
            children:[
              {
                path: 'file/:id',
                component: FileComponent
                ,canActivate:[authGuard]
              },
              {
                path: 'NewFile/:id',
                component: AccordionsComponent
                ,canActivate:[authGuard]
              },
            ]
          },
          {
            path: '',
            component: DiscusComponent
            ,canActivate:[authGuard],
            children:[
              {
                path: 'discuss/:id',
                component: NewdiscucComponent
                ,canActivate:[authGuard]
              },
              {
                path: 'Newdiscuss/:id',
                component: Newdiscuc2Component
                ,canActivate:[authGuard]
              },
            ]
          },
          {
            path: '',
            component: NotesComponent
            ,canActivate:[authGuard],
            children:[
              {
                path: 'note/:id',
                component: NewnoteComponent
                ,canActivate:[authGuard]
              },
              {
                path: 'Newnote/:id',
                component: Newnote2Component
                ,canActivate:[authGuard]
              },
            ]
          },
          {
            path: '',
            component: ManagementComponent
            ,canActivate:[authGuard],
            children:[
              {
                path: 'management/:id',
                component: NewnoteComponent
                ,canActivate:[authGuard]
              },
              // {
              //   path: 'managements/:id',
              //   component: NewmangsComponent
              //   ,canActivate:[authGuard]
              // },
            ]
          },

      ]

      },
      {
        path: 'managements/:id',
        component: NewmangsComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Status',
        component: ListGroupsComponent
        ,canActivate:[authGuard],

      },
      {
        path: 'Status/NewStatus',
        component: PopoversComponent
        ,canActivate:[authGuard],

      },
      {
        path: 'Status/Edit/:id',
        component: SpinnersComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Status/View/:id',
          component: TooltipsComponent
          ,canActivate:[authGuard]
        },

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {
  constructor()
   {}
}

