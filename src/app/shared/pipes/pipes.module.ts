import { NgModule } from '@angular/core';

//Pipes
import { FilterPipe } from './filter/filter.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';

@NgModule({
    declarations: [
        FilterPipe,
        OrderByPipe
    ],
    imports: [
    ],
    providers: [
    ],
    bootstrap: [
    ],
    exports: [
        FilterPipe,
        OrderByPipe
    ]
})
export class PipesModule { }