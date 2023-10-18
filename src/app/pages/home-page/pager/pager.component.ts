import {Component, OnInit} from '@angular/core';
import {pagerData} from '../home2/data';
import {pager} from "../home2/home2.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  pagerData!: pager[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.pagerData = pagerData;
  }


  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
