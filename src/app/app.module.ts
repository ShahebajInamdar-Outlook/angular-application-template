import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ConfigModule } from './core/modules/config/config.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UnAuthorisedComponent } from './core/components/un-authorised/un-authorised.component';
import { SessionExpiredComponent } from './core/components/session-expired/session-expired.component';

import { GlobalHttpService } from './core/services/global-http/global-http.service';
import { GlobalErrorHandlerService } from './core/services/global-error-handler/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UnAuthorisedComponent,
    SessionExpiredComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
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
