import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../list/list.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: List[], search: string=''): List[] {
    if (!search.trim()){
      return list
    }
    return list.filter(list => {
      return list.title.toLowerCase().includes(search.toLowerCase())
    } )
  }

}
