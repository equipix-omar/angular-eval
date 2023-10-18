import {Component, Input, OnInit} from '@angular/core';
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-equipix-account',
  templateUrl: './equipix-account.component.html',
  styleUrls: ['./equipix-account.component.scss']
})
export class EquipixAccountComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
