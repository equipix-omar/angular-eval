import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Lightbox} from "ngx-lightbox";
import {aboutReviews, recently} from "./single-v1.model";
import {aboutReviewData, recentlyData} from './data';
import {ProductsApiService} from "../../../core/services/Api-Services/products.api.service";
import {ProductsModel} from "../../../core/models/classes/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserGuestApiService} from "../../../core/services/Api-Services/user.guest.api.service";
import {CartItemsModel} from "../../../core/models/classes/cart.items.model";
import {CartModel} from "../../../core/models/classes/cart.model";
import {CartApiService} from "../../../core/services/Api-Services/cart.api.service";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../../core/services/token-storage.service";
import {DatePipe} from "@angular/common";
import {HelperService} from "../../../core/services/helper.service";
import {ProductFilterInterface} from "../../../core/models/product.filter.interface";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  product!: ProductsModel;

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  aboutReviewData!: aboutReviews[];
  recentlyData!: recently[];
  public overviewColleaps = true;
  public amenitiesColleaps = true;
  //  Validation form
  validationform!: UntypedFormGroup;
  signUpform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  longitude = 20.728218;
  latitude = 52.128973;
  _album: Array<any> = [];


  start_date_filter = null;
  end_date_filter = null;
  days_number = 0;

  price_type: string = '';

  public filter_object: ProductFilterInterface = {
    categories: [],
    accept_bid_requests: null,
    attributes: null,
    latitude: null,
    longitude: null,
    start_date: null,
    end_date: null
  };

  constructor(private modalService: NgbModal,
              private formBuilder: UntypedFormBuilder,
              private _lightbox: Lightbox,
              private service: ProductsApiService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              protected helperService: HelperService,
              private activatedRoute: ActivatedRoute,
              private userGuestApiService: UserGuestApiService,
              private cartApiService: CartApiService,
              private toastService: ToastrService,
              private tokenStorageService: TokenStorageService,
              private route: ActivatedRoute) {
    // for (let i = 4; i <= 8; i++) {
    //   const src = this.helperService.handleS3Image('city-guide/single/th0' + i + '.jpg');
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = this.helperService.handleS3Image('city-guide/single/th0' + i + '.jpg');
    //   const album = {
    //     src: src,
    //     // caption: caption,
    //     // thumb: thumb
    //   };

    //   this._album.push(album);
    // }
  }

  listenOnQueryParams() {
    this.route.queryParams.subscribe(p => {
      if (p) {
        // @ts-ignore
        if (p.start_date) {
          // @ts-ignore
          this.start_date_filter = p.start_date;
        }
        // @ts-ignore
        if (p.end_date) {
          // @ts-ignore
          this.end_date_filter = p.end_date;
        }

        // @ts-ignore
        this.filter_object = p;

        this.calculateDaysNumber();
      }
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {

    this.listenOnQueryParams();
    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });

    /**
     * Bootstrap validation form data
     */
    this.signUpform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.aboutReviewData = aboutReviewData;
    this.recentlyData = recentlyData;
    this.get();
  }

  private get() {
    this.route.paramMap.subscribe(paramMap => {
      let slug = paramMap.get('slug');

      this.service.get(slug).subscribe({
        next: (resp) => {
          this.product = resp;
          this.createAblbum();
          this.BreadCrumb();
        },
        error: () => {
        },
      });
    })
  }

  createAblbum(){
    this._album = [];
    if(this.product?.main_image?.thumbnail){
      this._album.push(
        {
          src:this.product?.main_image?.thumbnail
        }
      );
    }
    this.product.images.forEach(element => {
      this._album.push(
        {
          src:element.thumbnail
        }
      );
    });
  }

  private BreadCrumb() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      {label: 'Home', link: ''},
      {label: 'Equipment for rent', link: '/products'},
      {label: this.product?.title, active: true}
    ];
  }

  /**
   * Open Review modal
   * @param reviewContent modal content
   */
  openReviewModal(reviewContent: any) {
    this.modalService.open(reviewContent, {centered: true});
  }

  /**
   * Open Review modal
   * @param content modal content
   */
  openMapModal(content: any) {
    this.modalService.open(content, {size: 'fullscreen', centered: true});
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.signUpform.controls;
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  customOpen(a: any): void {
    // open lightbox
    this._lightbox.open(this._album, a);
  }

  // Sort filter
  sortField: any;
  sortBy: any

  SortFilter() {
    this.sortField = (document.getElementById("reviews-sorting") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  addToCart() {
    let token = this.tokenStorageService.getToken();
    if (!token) {
      this.userGuestApiService.createGuest().subscribe(value => {
        this.tokenStorageService.saveToken(value.token);
        this.tokenStorageService.saveExpireAt(value.expire_at);
        this.tokenStorageService.saveIsGuest(String(1));
        this.addToCartAPI();
      });
    } else {
      this.addToCartAPI();
    }
  }


  addToCartAPI() {
    let datePipe = new DatePipe('en-US');
    this.start_date_filter = datePipe.transform(this.start_date_filter, 'Y-MM-dd');
    this.end_date_filter = datePipe.transform(this.end_date_filter, 'Y-MM-dd');

    let cart_item = new CartItemsModel(this.product.id);
    cart_item.quantity = 1;
    cart_item.start_date = this.start_date_filter;
    cart_item.end_date = this.end_date_filter;
    cart_item.lat = this.filter_object?.latitude;
    cart_item.long = this.filter_object?.longitude;

    let cart = new CartModel(0);
    cart.items = [];
    cart.items.push(cart_item);

    this.cartApiService.addToCart(cart).subscribe(
      {
        next: (resp) => {
          this.toastService.success('Add To Cart Successfully', 'Add To Cart');
          this.router.navigate(['/cart']).then();
        },
        error: (error) => {
          let error_message = error?.error?.message;
          this.toastService.error(error_message, 'Add To Cart');
        },
      });
  }

  changeStartDateFilter(event: any) {
    this.start_date_filter = event.target.value;
    this.calculateDaysNumber();
    //this.goToProductDetails(this.product.id);
  }

  changeEndDateFilter(event: any) {
    this.end_date_filter = event.target.value;
    this.calculateDaysNumber();
    //this.goToProductDetails(this.product.id);
  }

  handleParams() {
    let queryParams: any = {};
    if (this.start_date_filter) {
      queryParams.start_date = this.start_date_filter;
    }
    if (this.end_date_filter) {
      queryParams.end_date = this.end_date_filter;
    }
    return queryParams;
  }

  goToProductDetails(id: number) {
    let queryParams = this.handleParams();
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    }).then();
  }


  calculateDaysNumber() {
    if (this.start_date_filter && this.end_date_filter) {
      let start = new Date(this.start_date_filter);
      let end = new Date(this.end_date_filter);

      let diff = Math.floor(end.getTime() - start.getTime());
      let day = 1000 * 60 * 60 * 24;

      this.days_number = Math.floor(diff / day);
      if (this.days_number > 0) {
        if (this.days_number == 7) {
          this.price_type = 'WEEK';
        } else if (this.days_number == 30 || this.days_number == 31) {
          this.price_type = 'MONTH';
        } else {
          this.price_type = 'DAYS';

        }
      } else {
        this.price_type = '';
      }

    }
  }

}
