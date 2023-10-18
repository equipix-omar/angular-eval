import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginateParams} from "../models/paginateParams.interface";
import {CategoryModel} from "../models/classes/category.model";
import {CategoryApiService} from "../services/Api-Services/category.api.service";


@Injectable({
  providedIn: 'root',
})
export class CategoriesManagers {

  public model: BehaviorSubject<CategoryModel[]> = new BehaviorSubject<CategoryModel[]>([]);
  public all_loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private paginate: PaginateParams = {
    active: null,
    per_page: 500,
    sort_key: 'id',
    sort_order: 'desc',
    search_key: null,
    next_page_index: 0
  };

  constructor(private service: CategoryApiService) {
    this.get();

  }

  public getModelObservable(): Observable<any> {
    return this.model.asObservable();
  }


  private get() {
    this.paginate.active = 1;
    this.service.list(this.paginate).subscribe({
      next: (resp) => {
        this.model.next(resp);
        this.all_loading.next(true);
      },
      error: () => {
      },
    });
  }
}
