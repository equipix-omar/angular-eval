import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper.service";

@Component({
  selector: 'app-blog-recent',
  templateUrl: './blog-recent.component.html',
  styleUrls: ['./blog-recent.component.scss']
})
export class BlogRecentComponent implements OnInit {

  constructor(protected helperService: HelperService) {
  }

  ngOnInit(): void {
  }

}
