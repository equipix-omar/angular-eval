import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ReviewModelSerializer} from "../../Serializers/ERP/review.serializer";
import {ReviewModel} from "../../models/classes/review.model";

@Injectable({
  providedIn: 'root'
})

export class ReviewApiService {

  serializer: ReviewModelSerializer;
  http: HttpClient;
  url: string;
  endpoint: string;
  constructor(Http: HttpClient) {
    this.serializer = new ReviewModelSerializer();
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'reviews?is_pagination=';
  }

  public _getAllReviewsData(page: string): Observable<ReviewModel> {
    return this.http
      .get<ReviewModel>(`${this.url}${this.endpoint}${page}`)
      .pipe(map((data:any) => this.serializer.fromJson(data) as ReviewModel));

  }
  /*public _updateUserData(item: userResponseModel): Observable<userResponseModel> {
    return this.http
      .post<userResponseModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as userResponseModel));
  }*/

}
