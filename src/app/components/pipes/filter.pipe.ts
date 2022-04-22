import { Pipe, PipeTransform } from '@angular/core';
import { DataI } from 'src/app/models/dataI';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(albums: DataI[], search: string = ''): DataI[] {
    if (search.length == 0) return albums;

    const filtered = albums.filter((albu) => albu.title.includes(search));
    return filtered;
  }
}
