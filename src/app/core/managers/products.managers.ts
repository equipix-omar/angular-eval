import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginateParams} from "../models/paginateParams.interface";
import {ProductsModel} from "../models/classes/product.model";
import {ProductsApiService} from "../services/Api-Services/products.api.service";
import {FilterOptionsApiService} from "../services/Api-Services/filter.options.api.service";
import {FilterOptionsModel} from "../models/classes/filter.options.model";

@Injectable({
  providedIn: 'root',
})
export class ProductsManagers {

  public model: BehaviorSubject<ProductsModel[]> = new BehaviorSubject<ProductsModel[]>([]);
  public all_loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  // @ts-ignore
  public filter_options: BehaviorSubject<FilterOptionsModel> = new BehaviorSubject<FilterOptionsModel>(null);


  private paginate: PaginateParams = {
    active: null,
    per_page: 20,
    sort_key: 'id',
    sort_order: 'desc',
    search_key: null,
    next_page_index: 0
  };

  constructor(private service: ProductsApiService,
              private filterOptionsApiService: FilterOptionsApiService) {
  }

  public getModelObservable(): Observable<any> {
    return this.model.asObservable();
  }

  public getFilterOptionsObservable(): Observable<any> {
    return this.filter_options.asObservable();
  }


  public list(filter: any = null, next_page_index = 0) {
    this.paginate.active = 1;
    this.paginate.next_page_index = next_page_index;

    this.service.list(this.paginate, filter).subscribe({
      next: (resp) => {
        this.model.next(resp);
        this.all_loading.next(true);
      },
      error: () => {
      },
    });
  }

  public getFilterOptions(filter: any = null) {
    this.filterOptionsApiService.get(filter).subscribe({
      next: (resp) => {
        this.filter_options.next(resp);
        this.all_loading.next(true);
      },
      error: () => {
      },
    });
  }


}
