import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
id:any
data:any;
  @Input() sidebarId: string = "sidebar";
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  constructor(private classToggler: ClassToggleService , private _Router:Router,private translate: TranslateService,
     Active:ActivatedRoute ,private _AuthService:AuthService) {
    super();
    this.id= Active.snapshot.paramMap.get("id")
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  changeCurrentLang(lang: string) {
    const html  = document.getElementsByTagName('html');
    const body  = document.getElementsByTagName('body');
    const table = document.getElementsByTagName('table');
    const cnav = document.getElementsByTagName('c-nav');
    if (lang == "ar") {
      html[0].setAttribute('dir', 'rtl');
      body[0].setAttribute('dir', 'rtl');
      table[0].setAttribute('dir', 'rtl');
      cnav[0].setAttribute('dir', 'rtl');
      //this.translate.use(lang)
      //localStorage.setItem('currentLang', 'ar')
      //window.location.reload();
    } else {
      //this.translate.use(lang)
      html[0].setAttribute('dir', 'ltr');
      body[0].setAttribute('dir', 'ltr');
      table[0].setAttribute('dir', 'ltr');
      cnav[0].setAttribute('dir', 'ltr');
      //this.translate.use(lang)
      //localStorage.setItem('currentLang', 'en')
      //window.location.reload();
    }
  }
  ngOnInit(): void {
    this.id = localStorage.getItem("UserId");
    // let lang = localStorage.getItem('currentLang');
    // const html  = document.getElementsByTagName('html');
    // const body  = document.getElementsByTagName('body');
    // const table = document.getElementsByTagName('table');
    // const cnav  = document.getElementsByTagName('c-nav');
    // if (lang == "ar") {
    //   html[0].setAttribute('dir', 'rtl');
    //   body[0].setAttribute('dir', 'rtl');
    //   table[0].setAttribute('dir', 'rtl');
    //   cnav[0].setAttribute('dir', 'rtl');
    // } else {
    //   html[0].setAttribute('dir', 'ltr');
    //   body[0].setAttribute('dir', 'rtl');
    //   table[0].setAttribute('dir', 'rtl');
    //   cnav[0].setAttribute('dir', 'rtl');
    // }
    this._AuthService.getOneUser(this.id).subscribe((res:any) => {
      this.data = res.data
    })
  }
  logout()
  {
   localStorage.clear()
   setTimeout(() =>
   {
   location.reload();
   }, 1000);
   this._Router.navigate(['/login'])
  }
}
