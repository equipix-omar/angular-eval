import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-end-date-filter',
  templateUrl: './end-date-filter.component.html',
  styleUrls: ['./end-date-filter.component.scss']
})
export class EndDateFilterComponent implements OnInit {

  @Output() end_date_filter_emitter = new EventEmitter<string>();

  @Input() start_date_filter!: string;

  @Input() end_date_filter!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeEndDateFilter(date: any) {
    // @ts-ignore
    this.end_date_filter_emitter.emit(date);
  }

}
