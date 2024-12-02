import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPrice',
  standalone: true
})
export class SplitPricePipe implements PipeTransform {
  transform(value: string | number | null, part: 'whole' | 'decimal'): string {
    if (value == null) {
      return part === 'whole' ? '0' : '00';
    }
    const [whole, decimal = '00'] = value.toString().split('.');
    return part === 'whole' ? whole : decimal.padEnd(2, '0');
  }
}
