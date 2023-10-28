import { PermissionService } from './Services/permission.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import { Helper } from './helper';
@Injectable({
  providedIn: 'root'
})
export class roleGuardGuard implements CanActivate {
  item: any = {};
  helper: any = Helper;
  role:any;
  roles:any;
  pers:any[]=[];
  constructor(private permisionService: PermissionService ,private _Router:Router)
  {
    this.item.role = localStorage.getItem('RoleName');
    this.permisionService.getpermision( Helper.toFormData(this.item)).subscribe(res=>{
      this.roles = res.data[0].permissions
      for (let i = 0; i < this.roles.length; i++) {
        this.pers.push(this.roles[i].name) ;
      }
      console.log(this.pers);
    })
  }
  ngOnInit()
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.IsAuthorised(route);

  }
  private IsAuthorised (route:ActivatedRouteSnapshot):boolean
  {
     //const role = localStorage.getItem('RoleName');
     const roles = this.pers;
     const expectedRoles = route.data['expectedRoles'];
     const RoleMatches  = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
     return (RoleMatches < 0) ? false : true;
  }
}
