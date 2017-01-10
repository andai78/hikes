import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from './hike';

@Pipe({
  name: 'hikePipe'
})
export class HikePipePipe implements PipeTransform {

  transform(value: Hike[], search: string = ''): any {
      if(search !== ''){
          let result = value.filter((hike: Hike) => hike.name.toLowerCase().includes(search));
          return result;
      }else{
          return value;
      }
  }

}
