import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const trimmed = value.replace(/\D/g, '').substr(0, 10); // Remove non-digits and trim
    const matched = trimmed.match(/(\d{0,3})(\d{0,3})(\d{0,4})/); // Match chunks of phone number
    
    // Use the type assertion ! to tell TypeScript that matched won't be null
    return !matched
      ? ''
      : !matched[2]
      ? matched[1]
      : `(${matched[1]}) ${matched[2]}` + (matched[3] ? `-${matched[3]}` : ''); // Format
  }
}
