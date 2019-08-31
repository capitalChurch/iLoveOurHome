import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === undefined) return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
