import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";
import {locations} from '../../../../storage/content/locations';
import {CategoryModel} from "../../../../core/models/classes/category.model";
import {CategoriesManagers} from "../../../../core/managers/categories.managers";
import {AttributesManagers} from "../../../../core/managers/attributes.managers";
import {AttributeModel} from "../../../../core/models/classes/attribute.model";
import {ActivatedRoute} from "@angular/router";
import {ProductFilterInterface} from "../../../../core/models/product.filter.interface";
import {AttributesFilterInterface} from "../../../../core/models/attributes.filter.interface";

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() options!: Options;


  @Output() locationSearchEmitter = new EventEmitter<any>();
  @Output() changeCategoriesEmitter = new EventEmitter<object>();
  @Output() attributesEmitter = new EventEmitter<string>();
  @Output() priceEmitter = new EventEmitter<object>();

  locations: { name: string, state: string, latitude: number, longitude: number } [] = [];

  categories: CategoryModel [] = [];
  attributes: AttributeModel [] = [];

  constructor(private categoriesManagers: CategoriesManagers,
              private attributesManagers: AttributesManagers,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef) {
    this.locations = locations;
  }

  public filter_object: AttributesFilterInterface = {
    categories: [],
  };

  ngOnInit(): void {
    this.loadData();
    this.listenOnQueryParams();
  }

  /**
   * SidebarHide modal
   */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  LocationSearch($event: any) {
    let target_location_name = $event.target.value;

    let target_location = this.locations.find(value => {
      return value.name == target_location_name;
    });

    if (target_location) {
      this.locationSearchEmitter.emit(target_location);
    }
  }

  changeCategory($event: Event, category_id: number) {
    this.changeCategoriesEmitter.emit({
      event: $event,
      category_id: category_id,
    });
  }

  attributesChange(s: string) {
    this.attributesEmitter.emit(s);
  }


  priceChange($event: number, min_value: boolean) {
    this.priceEmitter.emit({
      event: $event,
      min_value: min_value,
    });
  }

  listenOnQueryParams() {
    this.route.queryParams.subscribe(p => {
      // @ts-ignore
      this.filter_object = p;
      this.cdr.markForCheck();
      this.attributesManagers.get(this.filter_object);
      this.loadData();
    });
  }

  loadData() {
    this.categoriesManagers.getModelObservable().subscribe({
      next: (data) => {
        this.categories = data;
        this.cdr.markForCheck();
      }
    });

    this.attributesManagers.getModelObservable().subscribe({
      next: (data) => {
        this.attributes = data;
        this.attributes = this.attributes.filter(value => {
          return value.type == 'enums';
        })
        this.cdr.markForCheck();
      }
    });

  }

}
