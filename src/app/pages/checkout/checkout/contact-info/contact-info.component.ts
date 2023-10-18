import {Component, Input, OnInit} from '@angular/core';
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() submitted: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

}
