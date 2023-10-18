import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PositionDialogComponent} from "../../../shared/position-dialog/position-dialog.component";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../../core/services/token-storage.service";
import {locations} from '../../../storage/content/locations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  start_date_filter!: string;
  end_date_filter!: string;
  category_filter!: string;
  location_filter!: any;

  location_name: string = 'Select Location';

  is_all_filter_selected!: boolean;

  locations: { name: string, state: string, latitude: number, longitude: number } [] = [];

  constructor(private router: Router,
              private toastService: ToastrService,
              private tokenStorageService: TokenStorageService,
              public dialog: MatDialog) {
    this.locations = locations;
  }

  ngOnInit(): void {
    this.getLatLngFromLocalStorage()
  }

  getLatLngFromLocalStorage() {
    let latitude: any = this.tokenStorageService.getLocationLatitude();
    let longitude: any = this.tokenStorageService.getLocationLongitude();



    this.location_filter = {
      latitude: latitude,
      longitude: longitude
    };

    if (latitude && longitude) {
      latitude = Number(latitude);
      longitude = Number(longitude);

      let mini_distance = 0;
      this.locations.forEach(location => {
        let distance = this.getDistanceFromLatLonInKm(latitude, longitude, location.latitude, location.longitude);
        if (distance <= mini_distance){
          this.location_name = location.name;
        }
      });
    }


  }

  saveLatLngLocalStorage() {
    if (this.location_filter?.latitude) {
      this.tokenStorageService.saveLatitude(this.location_filter?.latitude);
    }

    if (this.location_filter?.longitude) {
      this.tokenStorageService.saveLongitude(this.location_filter?.longitude);
    }
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     // Distance in km
    return R * c;
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  changeCategoryFilter($event: string) {
    this.category_filter = $event;
  }

  changeLocationFilter($event: string) {
    this.location_filter = $event;
    this.saveLatLngLocalStorage();
  }

  changeStartDateFilter($event: string) {
    // @ts-ignore
    this.start_date_filter = $event?.target?.value;

    if (this.end_date_filter) {
      if (this.start_date_filter > this.end_date_filter) {
        this.start_date_filter = '';
      }
    }
  }

  changeEndDateFilter($event: string) {
    // @ts-ignore
    this.end_date_filter = $event?.target?.value;

    if (this.start_date_filter) {
      if (this.start_date_filter > this.end_date_filter) {
        this.start_date_filter = '';
      }
    }
  }

  handleParams() {
    let queryParams: any = {};
    if (this.category_filter) {
      queryParams.categories = this.category_filter;
    }
    if (this.location_filter) {
      queryParams.latitude = this.location_filter?.latitude;
      queryParams.longitude = this.location_filter?.longitude;
    }
    if (this.start_date_filter) {
      queryParams.start_date = this.start_date_filter;
    }
    if (this.end_date_filter) {
      queryParams.end_date = this.end_date_filter;
    }

    if (!queryParams.categories || !queryParams.latitude ||
      !queryParams.longitude || !queryParams.start_date ||
      !queryParams.end_date) {

      this.is_all_filter_selected = false;

      this.toastService.error('Please Select all filters', 'Filters');
    } else {
      this.is_all_filter_selected = true;
    }

    return queryParams;
  }

  goToProductList() {
    let queryParams = this.handleParams();


    if (queryParams.latitude && queryParams.longitude) {
      if (this.is_all_filter_selected) {
        this.navigateToProducts(queryParams);
      }
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          queryParams.longitude = position.coords.longitude;
          queryParams.latitude = position.coords.latitude;

          if (this.is_all_filter_selected) {
            this.navigateToProducts(queryParams);
          }

        }, () => {
          this.openDialog();
        });
      } else {
        this.openDialog();
      }
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(PositionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.location_filter = result?.select_location;
      this.location_name = result?.select_location?.name;

      this.saveLatLngLocalStorage();
    });
  }

  navigateToProducts(queryParams: any) {
    this.router.navigate(['/products'], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    }).then();
  }

}
