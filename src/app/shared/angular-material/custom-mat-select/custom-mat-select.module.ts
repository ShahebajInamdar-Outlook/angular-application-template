import { NgModule } from '@angular/core';
import { CustomMatSelectComponent } from './custom-mat-select.component';
import { CoreAngularMaterialModule } from '../core-angular-material/core-angular-material.module';

@NgModule({
  imports: [
    CoreAngularMaterialModule
  ],
  declarations: [CustomMatSelectComponent],
  exports: [CustomMatSelectComponent]
})
export class CustomMatSelectModule { }
