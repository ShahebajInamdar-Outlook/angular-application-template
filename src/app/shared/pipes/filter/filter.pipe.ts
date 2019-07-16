import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(filterList: Array<any>, filterProperty: string, filterText: string): Array<any> {
        if (filterText == null || filterText === '') {
            return filterList;
        } else {
            return filterList.filter(item => item[filterProperty] != null && item[filterProperty].toString().indexOf(filterText) > -1);
        }
    }
}

// NOTE: Syntax to call this pipe as -> let item of (list | filter:'property':'filterText')
