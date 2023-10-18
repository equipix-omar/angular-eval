import { Component, OnInit } from '@angular/core';

import { properties } from './properties.model';
import { propertiesData } from './data';
import {HelperService} from "../../../core/services/helper.service";
import {OrderApiService} from "../../../core/services/Api-Services/order.api.service";
import { OrderItem, OrderItemModel} from "../../../core/models/classes/order.item.model";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

/**
 * Properties Component
 */
export class PropertiesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  propertiesData!: properties[];
  order !: OrderItemModel ;
  orders !:OrderItem[];
  constructor(protected helperService: HelperService,
              private  orderApiService:OrderApiService) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'My Properties', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();
    this._fetchAllOrdersData();
  }



   // Chat Data Fetch
   private _fetchData() {
    this.propertiesData = propertiesData;
  }

  _fetchAllOrdersData(){
      this.orderApiService._getAllOrdersData().subscribe({
        next:(resp)=>{
          console.log("order apiiiiiiiiiii ",resp);
          this.order=resp;
          this.orders =this.order.body;
          console.log("order api ",this.orders);

        },error:(error) =>{
          let error_message = error?.error?.message;
            console.log("error of order api",error)
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
