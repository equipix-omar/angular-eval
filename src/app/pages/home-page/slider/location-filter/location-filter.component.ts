import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {locations} from '../../../../storage/content/locations';

@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss']
})
export class LocationFilterComponent implements OnInit {

  @Input() location_name = 'Site Location';
  @Output() location_filter_emitter = new EventEmitter<string>();

  locations: { name: string, state: string, latitude: number, longitude: number } [] = [];
  constructor() {
    this.locations = locations;
  }

  ngOnInit(): void {
  }

  changeLocationFilter(location: any) {
    // @ts-ignore
    this.location_filter_emitter.emit(location);
  }

}
