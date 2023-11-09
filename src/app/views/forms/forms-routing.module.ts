import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { RangesComponent } from './ranges/ranges.component';
import { SelectComponent } from './select/select.component';
import { ChecksRadiosComponent } from './checks-radios/checks-radios.component';
import { LayoutComponent } from './layout/layout.component';
import { ValidationComponent } from './validation/validation.component';
import { authGuard } from 'src/app/auth.guard';
import { roleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ChecksRadiosComponent,
        canActivate:[authGuard,],

      //   ,canActivate:[authGuard,roleGuardGuard],
      //   data:{
      //     expectedRoles:['view user']
      // },
      },
      {
        path: 'newUser',
        component: RangesComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'EditUser/:id',
        component: FloatingLabelsComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'View/:id',
        component: FormControlsComponent
        ,canActivate:[authGuard]
      },
      {
        path: 'View/:id/Edit/:id',
        component: SelectComponent
        ,canActivate:[authGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
