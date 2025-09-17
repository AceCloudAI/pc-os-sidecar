import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/common/service-modules';
import { AuditLogModule } from 'src/domains/audit-log/audit-log.module';
import { ServersModule } from 'src/domains/server/servers/servers.module';
import { AuditLoggerService } from './audit-logger.service';

@Module({
  imports: [LoggerModule, AuditLogModule, ServersModule],
  providers: [AuditLoggerService],
  exports: [AuditLoggerService],
})
export class AuditLoggerModule {}
