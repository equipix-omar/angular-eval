import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public items = <any>[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', url: '/dashboard', attributes: { title: 'Home' } },
      { label: 'Library', url: '/dashboard' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'CoreUI', url: '/dashboard' }
    ];

    setTimeout(() => {
      this.items = [
        { label: 'CoreUI', url: '/dashboard' },
        { label: 'Data', url: '/dashboard/' },
        { label: 'Library', url: '/dashboard' },
        { label: 'Home', url: '/dashboard', attributes: { title: 'Home' } }
      ];
    }, 5000);
  }
}
