import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective implements OnInit{

  constructor(
      private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }

  transform(value: string) {
    if (!value) return "";
    let trim = value.replace(/\D/g, '').substr(0,10); // Remove non-digits and trim
    let matched:any = trim.match(/(\d{0,3})(\d{0,3})(\d{0,4})/); // Match chunks of phone number
    return !matched[2] ? matched[1] : '(' + matched[1] + ') ' + matched[2] + (matched[3] ? '-' + matched[3] : ''); // Format
  }

  @HostListener("keyup", ["$event.target.value"])
  change() {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }
  

}