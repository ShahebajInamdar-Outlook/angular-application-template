import { NgModule } from '@angular/core';
import { CustomMatSelectComponent } from './custom-mat-select.component';
import { CoreAngularMaterialModule } from '../core-angular-material/core-angular-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CoreAngularMaterialModule
  ],
  declarations: [CustomMatSelectComponent],
  exports: [CustomMatSelectComponent]
})
export class CustomMatSelectModule { }
