import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import configuration from './configuration';
import { LoggingConfigService } from './config.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        sentryEnabled: Joi.string().default('false'),
      }).unknown(),
    }),
  ],
  providers: [ConfigService, LoggingConfigService],
  exports: [ConfigService, LoggingConfigService],
})
export class LoggingConfigModule {}
