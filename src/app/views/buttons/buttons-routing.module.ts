import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { authGuard } from 'src/app/auth.guard';
import { StatusComponent } from './status/status.component';
import { ViewComponent } from './view/view.component';
import { PriorityComponent } from './priority/priority.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { EditstatusComponent } from './editstatus/editstatus.component';
import { ViewpriorityComponent } from './viewpriority/viewpriority.component';
import { EditpriorityComponent } from './editpriority/editpriority.component';
import { NewstatusComponent } from './newstatus/newstatus.component';
import { NewpriorityComponent } from './newpriority/newpriority.component';
import { roleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ButtonsComponent
      //   ,canActivate:[authGuard,roleGuardGuard],
      //   data:{
      //     expectedRoles:['view task']
      // },
      },
      {
        path: 'NewTask',
        component: DropdownsComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'EditTask/:id',
        component: PriorityComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'ViewTask/:id',
        component: ViewComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Status',
        component: StatusComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Status/NewStatus',
        component: NewstatusComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Status/View/:id',
          component: ViewstatusComponent
          ,canActivate:[authGuard]
        },
        {
          path: 'Status/Edit/:id',
          component: EditstatusComponent
          ,canActivate:[authGuard]
        },
      {
        path: 'Priority',
        component: ButtonGroupsComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Priority/NewPriority',
        component: NewpriorityComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'Priority/View/:id',
          component: ViewpriorityComponent
          ,canActivate:[authGuard]
        },
        {
          path: 'Priority/Edit/:id',
          component: EditpriorityComponent
          ,canActivate:[authGuard]
        },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
