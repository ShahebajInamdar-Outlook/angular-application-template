import { ConfigService } from '../../services/config/config.service';
import { APP_INITIALIZER } from '@angular/core';

export function ConfigFactory(_configService: ConfigService) {
    return () => _configService.load();
  }
  
  export function initConfig() {
    return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigService],
      multi: true
    }
  }
  
  const ConfigModule = {
    initConfig: initConfig
  }
  
  export { ConfigModule };