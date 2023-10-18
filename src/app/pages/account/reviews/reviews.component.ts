import {Component, OnInit} from '@angular/core';

import {aboutReviews, youReviews} from './reviews.model';
import {aboutReviewData, youReviewData} from './data';
import {HelperService} from "../../../core/services/helper.service";
import {ReviewApiService} from "../../../core/services/Api-Services/review.api.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

/**
 * Reviews Component
 */
export class ReviewsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  aboutReviewData!: aboutReviews[];
  youReviewData!: youReviews[];
  readonly = false;

  constructor(protected helperService: HelperService,
              private reviewApiService:ReviewApiService) {
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'Reviews', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();
    this._fetchAllReviewsData();
  }

   // Chat Data Fetch
   private _fetchData() {
    this.aboutReviewData = aboutReviewData;
    this.youReviewData = youReviewData;
  }

  _fetchAllReviewsData(){
    this.reviewApiService._getAllReviewsData("1").subscribe({
      next:(resp)=>{
        console.log("review api ",resp);
      },error:(error) =>{
        let error_message = error?.error?.message;
        console.log("error of review api",error)
      }
    });
  };

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  // Sort filter
  sortField:any;
  sortBy:any
  SortFilter(){
    this.sortField = (document.getElementById("review-sorting1") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // Review Sort filter
  sortReviewField:any;
  sortReviewBy:any
  SortReviewFilter(){
    this.sortReviewField = (document.getElementById("review-sorting2") as HTMLInputElement).value;
    if (this.sortReviewField[0] == 'A') {
      this.sortReviewBy = 'desc';
      this.sortReviewField = this.sortReviewField.replace(/A/g, '')
    }
    if (this.sortReviewField[0] == 'D') {
      this.sortReviewBy = 'asc';
      this.sortReviewField = this.sortReviewField.replace(/D/g, '')
    }
  }


}
