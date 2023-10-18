import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start-date-filter',
  templateUrl: './start-date-filter.component.html',
  styleUrls: ['./start-date-filter.component.scss']
})
export class StartDateFilterComponent implements OnInit {

  @Output() start_date_filter_emitter = new EventEmitter<string>();

  @Input() start_date_filter!: string;

  @Input() end_date_filter!: string;


  constructor() {
  }

  ngOnInit(): void {
  }

  changeStartDateFilter(date: any) {
    if (this.end_date_filter) {
      let current = date?.target?.value;

      if (current > this.end_date_filter) {
      } else {
        // @ts-ignore
        this.start_date_filter_emitter.emit(date);
      }
    } else {
      // @ts-ignore
      this.start_date_filter_emitter.emit(date);
    }
  }

}
