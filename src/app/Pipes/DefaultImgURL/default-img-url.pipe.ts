import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImgURL'
})
export class DefaultImgURLPipe implements PipeTransform {

  transform(value: string): string {
    if (value)
      return value;
    else
      return value = 'https://logowik.com/content/uploads/images/league-of-legends7810.jpg';
  }
}


