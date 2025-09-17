import { Module } from '@nestjs/common';
import { CustomLoggerService } from 'src/infrastructure/logging/logger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class CustomLoggingModule {}
