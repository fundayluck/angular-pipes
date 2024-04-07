import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, target: string): unknown {
    if (!value) {
      return ''
    }

    switch (target) {
      case 'km':
        return value * 1.60934
      case 'm':
        return value * 1.60934 * 1000
      case 'cm':
        return value * 1.60934 * 1000 * 1000
      default:
        return "Here we go again!";
    }
  }

}
