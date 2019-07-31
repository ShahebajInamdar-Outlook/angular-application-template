import { NgModule } from '@angular/core';
import { CoreAngularMaterialModule } from './core-angular-material/core-angular-material.module';
import { CustomMatSelectModule } from './custom-mat-select/custom-mat-select.module';

@NgModule({
  imports: [
    CoreAngularMaterialModule,
    CustomMatSelectModule
  ],
  exports: [
    CoreAngularMaterialModule,
    CustomMatSelectModule
  ]
})
export class AngularMaterialModule { }
