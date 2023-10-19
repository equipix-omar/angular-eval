import { Component, OnInit } from '@angular/core';
import { properties } from './properties.model';
import { HelperService } from "../../../core/services/helper.service";
import { OrderApiService } from "../../../core/services/Api-Services/order.api.service";
import { OrderItem, OrderItemModel } from "../../../core/models/classes/order.item.model";
import { OrderServiceService } from './order-service.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

/**
 * Properties Component
 */
export class PropertiesComponent extends OrderServiceService implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  propertiesData!: properties[];
  order !: OrderItemModel;
  orders !: OrderItem[];
  constructor(protected helperService: HelperService,
    private orderApiService: OrderApiService) {
    super();
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Account', link: '/account/info' },
      { label: 'My Properties', active: true }
    ];

    this._fetchAllOrdersData();
  }


  _fetchAllOrdersData() {
    this.isLoading = true;
    this.orderApiService._getAllOrdersData()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (res) => {
          this.orders = res.body;
        }, error: (error) => {
          console.log("error of order api", error)
        }
      });
  };
  /**
   * On mobile toggle button clicked
   */
  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

}
