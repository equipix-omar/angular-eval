import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CategoriesManagers} from "../../../core/managers/categories.managers";
import {CategoryModel} from "../../../core/models/classes/category.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  categories: CategoryModel [] = [];

  constructor(private categoriesManagers: CategoriesManagers,
              private route: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.categoriesManagers.getModelObservable().subscribe({
      next: (data) => {
        this.categories = data;
        this.cdr.markForCheck();
      }
    });
  }

  goToProductList(category_id : any) {
    let queryParams = {
      categories : category_id
    };
    this.route.navigate(['/products'], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    }).then();
  }

}
