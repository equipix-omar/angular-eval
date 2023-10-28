import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { authGuard } from 'src/app/auth.guard';
import { roleGuardGuard } from 'src/app/role-guard.guard';
import { RolesComponent } from './roles/roles.component';
import { NewrolesComponent } from './newroles/newroles.component';
import { EditrolesComponent } from './editroles/editroles.component';
import { PermissionComponent } from './permission/permission.component';
import { NewpermissionComponent } from './newpermission/newpermission.component';
import { EditpermissionComponent } from './editpermission/editpermission.component';
import { ControlsComponent } from './controls/controls.component';
import { NewcontrolsComponent } from './newcontrols/newcontrols.component';
import { EditcontrolsComponent } from './editcontrols/editcontrols.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RolesComponent
        ,canActivate:[authGuard ],
      },
      {
        path: 'NewRole',
        component: NewrolesComponent
        ,canActivate:[authGuard],

      },
      {
          path: 'Edit/:id',
          component: EditrolesComponent
          ,canActivate:[authGuard]
      },
      {
        path: 'view/:id',
        component: EditcontrolsComponent
        ,canActivate:[authGuard]
      },

      {
        path: 'Permissions',
        pathMatch: 'full',
        component: PermissionComponent
        ,canActivate:[authGuard ],
      },
      {
        path: 'Permissions/NewPermission',
        component: NewpermissionComponent
        ,canActivate:[authGuard],

      },
      {
          path: 'Permissions/Edit/:id',
          component: EditpermissionComponent
          ,canActivate:[authGuard]
      },
      {
        path: 'controls',
        pathMatch: 'full',
        component: ControlsComponent
        ,canActivate:[authGuard ],
      },
      {
        path: 'controls/Newcontrol',
        component: NewcontrolsComponent
        ,canActivate:[authGuard],

      },
      {
          path: 'controls/Edit/:id',
          component: EditcontrolsComponent
          ,canActivate:[authGuard]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}

