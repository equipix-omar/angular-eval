import {Component, OnInit} from '@angular/core';

import {locations} from '../../storage/content/locations';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-position-dialog',
  templateUrl: './position-dialog.component.html',
  styleUrls: ['./position-dialog.component.scss']
})
export class PositionDialogComponent implements OnInit {

  locations: { name: string, state: string, latitude: number, longitude: number } [] = [];

  constructor(public dialogRef: MatDialogRef<PositionDialogComponent>,) {
    this.locations = locations;
  }

  select_location: any = null;
  select_state: any = null;

  ngOnInit(): void {
  }

  changeLocationFilter($event: Event) {
    // @ts-ignore
    this.select_state = $event.target?.value;
    if (this.select_state) {
      this.select_location = this.locations.find((value, index) => {
        return value.state == this.select_state;
      });
    }
  }

  doAction() {
    this.dialogRef.close({select_location: this.select_location, select_state: this.select_state});
  }

  closeDialog() {
    this.dialogRef.close({select_location: this.select_location, select_state: this.select_state});
  }
}
