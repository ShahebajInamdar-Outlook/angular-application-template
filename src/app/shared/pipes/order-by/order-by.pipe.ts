import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false
})

export class OrderByPipe implements PipeTransform {
    transform(sortList: Array<any>, sortProperty: string, sortType: string): Array<any> {
        return sortList.sort((a, b) => {
            const x: any = a['' + sortProperty + ''];
            const y: any = b['' + sortProperty + ''];

            if (x < y && sortType === 'asc') {
                return -1;
            } else if (x > y && sortType === 'asc') {
                return 1;
            } else if (x < y && sortType === 'desc') {
                return 1;
            } else if (x > y && sortType === 'desc') {
                return -1;
            } else {
                return 0;
            }
        });
    }
}

// NOTE: Syntax to call this pipe as -> let item of (list | orderBy:'property':'asc')
