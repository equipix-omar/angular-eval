import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginateParams} from "../models/paginateParams.interface";
import {AttributeModel} from "../models/classes/attribute.model";
import {AttributesApiService} from "../services/Api-Services/attributes.api.service";


@Injectable({
  providedIn: 'root',
})
export class AttributesManagers {

  public model: BehaviorSubject<AttributeModel[]> = new BehaviorSubject<AttributeModel[]>([]);
  public all_loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private paginate: PaginateParams = {
    active: null,
    per_page: 500,
    sort_key: 'id',
    sort_order: 'desc',
    search_key: null,
    next_page_index: 0
  };

  constructor(private service: AttributesApiService) {
    this.get();

  }

  public getModelObservable(): Observable<any> {
    return this.model.asObservable();
  }


  public get(filters: any = null) {
    this.paginate.active = 1;
    this.service.list(this.paginate, filters).subscribe({
      next: (resp) => {
        this.model.next(resp);
        this.all_loading.next(true);
      },
      error: () => {
      },
    });
  }
}
