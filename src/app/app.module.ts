import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ConfigModule } from './core/modules/config/config.module';

//Components
import { AppComponent } from './app.component';

//Services
import { ConfigService } from './core/services/config/config.service';
import { GlobalDataService } from './core/services/global-data/global-data.service';
import { GlobalErrorHandlerService } from './core/services/global-error-handler/global-error-handler.service';
import { GlobalEventEmitterService } from './core/services/global-event-emitter/global-event-emitter.service';
import { GlobalHttpService } from './core/services/global-http/global-http.service';
import { GlobalMethodsService } from './core/services/global-methods/global-methods.service';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    GlobalDataService,
    GlobalErrorHandlerService,
    GlobalEventEmitterService,
    GlobalHttpService,
    GlobalMethodsService,
    LocalStorageService,
    ConfigModule.initConfig(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
