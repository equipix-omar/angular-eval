import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'Internal';
  currentLang: any;
  public static baseURL :any = "http://127.0.0.1:8000/api/"
 //public static baseURL :any = "https://internal.ratio-golden.com/api/"


 public static ImageURL :any = "http://127.0.0.1:8000/"
 //public static ImageURL :any = "https://internal.ratio-golden.com/"
  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private translate: TranslateService,
    private toastr: ToastrService
  ) {
    translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang)
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }
  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
