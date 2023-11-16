import { log } from 'handsontable/helpers';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/Services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
id:any
data:any;
count:any;
lan:any
Imageurl :any = AppComponent.ImageURL
  @Input() sidebarId: string = "sidebar";
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  constructor(private classToggler: ClassToggleService , private _Router:Router,private translate: TranslateService,
     Active:ActivatedRoute ,private _AuthService:AuthService,private pr:ProjectService) {
    super();
    this.id= Active.snapshot.paramMap.get("id")
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  changeCurrentLang(lang: string) {
    const html   = document.getElementsByTagName('html');
    const body   = document.getElementsByTagName('body');
    const table  = document.getElementsByTagName('table');
    if (lang == "ar") {
      this.translate.use(lang)
      localStorage.setItem('currentLang', 'ar')
      html[0].setAttribute('dir', 'rtl');
      body[0].setAttribute('dir', 'rtl');
      table[0].setAttribute('dir', 'rtl');
    } else if (lang == "en") {
      this.translate.use(lang)
      localStorage.setItem('currentLang', 'en')
      html[0].setAttribute('dir', 'ltr');
      body[0].setAttribute('dir', 'ltr');
      table[0].setAttribute('dir', 'ltr');
    }
  }
  ngOnInit(): void {
    this.id = localStorage.getItem("UserId");
    this._AuthService.getOneUser(this.id).subscribe((res:any) => {
      this.data = res.data
    })
    this.pr.getAllProject().subscribe((res:any) => {
      this.count = res.count
    })
    this.lan = localStorage.getItem('currentLang');
    const html   = document.getElementsByTagName('html');
    const body   = document.getElementsByTagName('body');
    if (this.lan == "ar") {
      this.translate.use(this.lan)
      localStorage.setItem('currentLang', 'ar')
      html[0].setAttribute('dir', 'rtl');
      body[0].setAttribute('dir', 'rtl');
    } else if (this.lan == "en") {
      this.translate.use(this.lan)
      localStorage.setItem('currentLang', 'en')
      html[0].setAttribute('dir', 'ltr');
      body[0].setAttribute('dir', 'ltr');
  }
}
  logout()
  {
   localStorage.clear()
   this._Router.navigate(['/login'])
  }
}
