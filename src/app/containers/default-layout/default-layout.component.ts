import { Component } from '@angular/core';
import { INavData } from '@coreui/angular/lib/sidebar/sidebar-nav/sidebar-nav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PermissionService } from 'src/app/Services/permission.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/helper';
interface Item {
  name: string;
  icon: string;
  subnav?: Item[];
  showSubnav?: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],

})
export class DefaultLayoutComponent {
  item: any = {};
  helper: any = Helper;
  role:any;
  roles:any;
  pers:any[]=[];
  constructor(private translate: TranslateService,private permisionService: PermissionService ,private _Router:Router) {

  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
    navItems: INavData[] = [
    {
      //name: this.translate.instant('General.HCPAINTERNAL'),
      name:'HCPA INTERNAL',
      url: '/dashboard',
    },
    {
      name: 'Project',
      url: '/Project',
      iconComponent: { name: 'cilSpreadsheet' },
      children: [
        {
          name: 'Project',
          url: '/Project'
        },
        {
          name: 'Status',
          url: '/Project/Status'
        },
      ]
    },
    {
      name: 'Tasks',
      url: '/Task',
      iconComponent: { name: 'cilTask' },
      children: [
        {
          name: 'Task',
          url: '/Task'
        },
        {
          name: 'Status',
          url: '/Task/Status'
        },
        {
          name: 'Priority',
          url: '/Task/Priority'
        },

      ]
    },

  ];
  ngOnInit(): void {

    this.item.role = localStorage.getItem('RoleName');
    this.permisionService.getpermision( Helper.toFormData(this.item)).subscribe(res=>{
      this.roles = res.data[0].permissions
      for (let i = 0; i < this.roles.length; i++) {
        this.pers.push(this.roles[i].name) ;
      }
    })
  }
}
