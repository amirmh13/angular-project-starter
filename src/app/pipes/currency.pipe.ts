import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.toString();
    return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
