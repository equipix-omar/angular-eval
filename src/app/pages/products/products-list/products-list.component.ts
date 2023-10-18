import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";
import {ProductsManagers} from "../../../core/managers/products.managers";
import {ProductsModel} from "../../../core/models/classes/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductFilterInterface} from "../../../core/models/product.filter.interface";
import {FilterOptionsModel} from "../../../core/models/classes/filter.options.model";

interface mapView{
  address:{
    lat:number;
    lng:number;
  }[],
  title:string;
  id:number;
}
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = -118.40910360;
  latitude = 33.94379020;
  dataCount: any;
  products: ProductsModel [] = [];
  filter_options!: FilterOptionsModel;

  categories_filters: [] = [];

  current_page!: number;
  last_page!: number;
  from!: number;
  to!: number;
  per_page!: number;
  total_items!: number;

  mapObject:mapView[] = [];


  /**
   * Range Slider Wise Data Filter
   */
    // Range Slider
  minValue: number = 1100;
  maxValue: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  constructor(private productsManagers: ProductsManagers,
              private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  public filter_object: ProductFilterInterface = {
    categories: [],
    accept_bid_requests: null,
    attributes: null,
    latitude: null,
    longitude: null,
    start_date: null,
    end_date: null
  };

  ngOnInit(): void {
    this.listenOnQueryParams();

    this.breadCrumbItems = [
      {label: 'Home', link: ''},
      {label: 'Search Result', active: true}
    ];
  }

  listenOnQueryParams() {
    this.route.queryParams.subscribe(p => {
      // @ts-ignore
      this.filter_object = p;
      this.cdr.markForCheck();
      this.productsManagers.list(this.filter_object);
      this.productsManagers.getFilterOptions(this.filter_object);
      this.loadData();
    });
  }

  // Data Fetch
  private _fetchData() {
    this.dataCount = this.products.length;
    this.productsData = Object.assign([], this.products);
  }

  loadData() {
    this.productsManagers.getModelObservable().subscribe({
      next: (data) => {
        this.products = data;
        this._generateMapObject();
        // @ts-ignore
        this.current_page = this.products?.pagination?.current_page;
        // @ts-ignore
        this.last_page = this.products?.pagination?.per_page;
        // @ts-ignore
        this.from = this.products?.pagination?.from;
        // @ts-ignore
        this.to = this.products?.pagination?.to;
        // @ts-ignore
        this.per_page = this.products?.pagination?.per_page;
        // @ts-ignore
        this.total_items = this.products?.pagination?.total;


        this.cdr.markForCheck();
        this._fetchData();
      }
    });

    this.productsManagers.getFilterOptionsObservable().subscribe({
      next: (data) => {
        this.filter_options = data;
        this.minValue = this.filter_options?.min_price;
        this.maxValue = this.filter_options?.max_price;
        
        this.cdr.markForCheck();
        this._fetchData();
      }
    });

  }

  private _generateMapObject(){
    this.mapObject = this.products.map(product =>{
     let address = product.branches
     .filter(branch => branch.address?.lat && branch.address?.long)
     .map(branch =>{
        return {
          lat:branch.address?.lat,
          lng:branch.address?.long
        }
      });
      return {
        title : product.title,
        address : address,
        id:product.id
      }
    })
    .filter(product => product.address.length);
    console.log(this.mapObject);
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true
  };

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }


  // Map Model Open
  openMapModal() {
    document.querySelector('.map-popup')?.classList.remove('invisible');
  }

  // Map Model Open
  closeMapModel() {
    document.querySelector('.map-popup')?.classList.add('invisible');
  }

  productsData: ProductsModel [] = [];

  // Location Filter
  LocationSearch(location: any) {
    let new_filter = {
      latitude : location.latitude,
      longitude : location.longitude,
    };

    let merged = { ...this.filter_object, ...new_filter};

    this.router.navigate(['/products'], {
      queryParams: merged,
      queryParamsHandling: 'merge',
    }).then();
  }


  changeCategory($event: any) {
    let category_id = $event.category_id;
    if ($event.event.target.checked){
      // @ts-ignore
      this.categories_filters.push(category_id);
    }
    else{
      // @ts-ignore
      this.categories_filters = this.categories_filters.filter(value => {
        return value != category_id;
      })
    }

    let category = this.categories_filters.toString();

    let new_filter = {
      categories : category
    };

    let merged = { ...this.filter_object, ...new_filter};

    this.router.navigate(['/products'], {
      queryParams: merged,
      queryParamsHandling: 'merge',
    }).then();
  }


  // Property  Filter


  priceValueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      this.productsData = this.products.filter((data: any) => {
        data.price = data.price.replace(/,/g, '')
        return data.price >= this.minValue && data.price <= this.maxValue;
      });
    }
    this.dataCount = this.productsData.length;
  }

  changePrice($event: object) {
    // @ts-ignore
    let event = $event?.event;
    // @ts-ignore
    let min_value = $event?.min_value;
    this.priceValueChange(event, min_value);
  }

  // Bed-Rooms  Filter
  changeAttributes(value: any) {
    if (value > 3) {
      this.productsData = this.products.filter((data: any) => {
        return data.bad >= value;
      });
    } else {
      this.productsData = this.products.filter((data: any) => {
        return data.bad === value;
      });
    }
    this.dataCount = this.productsData.length;
  }


  // Sort filter
  sortField: any;
  sortBy: any

  SortFilter() {
    this.sortField = (document.getElementById("sortby") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  handleParams() {
    let queryParams: any = {};
    if (this.filter_object?.start_date) {
      queryParams.start_date = this.filter_object?.start_date;
    }
    if (this.filter_object?.end_date) {
      queryParams.end_date = this.filter_object?.end_date;
    }
    return queryParams;
  }

  goToProductDetails(id: number) {
    let queryParams = this.handleParams();
    this.router.navigate(['/products/' + id], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    }).then();
  }

  changeProductPage($event: number) {
    this.productsManagers.list(this.filter_object, $event - 1);

  }
}
