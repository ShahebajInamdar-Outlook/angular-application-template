import { NgModule } from '@angular/core';
import { CoreAngularMaterialModule } from './core-angular-material/core-angular-material.module';

@NgModule({
  imports: [
    CoreAngularMaterialModule
  ],
  exports: [
    CoreAngularMaterialModule
  ]
})
export class AngularMaterialModule { }
