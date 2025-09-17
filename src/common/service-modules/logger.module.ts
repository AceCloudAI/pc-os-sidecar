import { Module } from '@nestjs/common';
import { CustomLoggerService } from '../../infrastructure/logging/logger.service';
import { LoggingConfigModule } from 'src/config';

@Module({
  imports: [LoggingConfigModule],
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
