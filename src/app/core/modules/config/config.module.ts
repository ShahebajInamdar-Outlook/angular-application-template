import { ConfigService } from '../../services/config/config.service';
import { APP_INITIALIZER } from '@angular/core';

export function ConfigFactory(configService: ConfigService) {
  return () => configService.load();
}

export function loadConfig() {
  return {
    provide: APP_INITIALIZER,
    useFactory: ConfigFactory,
    deps: [ConfigService],
    multi: true
  };
}

const ConfigModule = {
  initConfig: loadConfig
};

export { ConfigModule };
