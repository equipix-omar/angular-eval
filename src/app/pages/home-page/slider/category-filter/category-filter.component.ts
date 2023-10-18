import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryModel} from "../../../../core/models/classes/category.model";
import {CategoriesManagers} from "../../../../core/managers/categories.managers";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  @Output() category_filter_emitter = new EventEmitter<string>();

  categories: CategoryModel [] = [];

  constructor(private categoriesManagers: CategoriesManagers,
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

  changeCategoryFilter(category_id: any) {
    // @ts-ignore
    this.category_filter_emitter.emit(category_id);
  }
}
