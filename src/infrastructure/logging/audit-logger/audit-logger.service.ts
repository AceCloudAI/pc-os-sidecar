import { Injectable } from '@nestjs/common';
import { AuditLogs } from 'src/domains/audit-log/entity/audit-log.schema';
import { CustomLoggerService } from '../logger.service';
import { ApiDataInterface, AttributesInterface } from 'src/domains/audit-log/interfaces/api-data.interface';
import { ServersService } from 'src/domains/server/servers/servers.services';
import { AuditLogRequestInterface } from 'src/common/interfaces/audit-log.interface';
import { AuditLogService } from 'src/domains/audit-log/audit-log.service';
import { getServerErrorMessage } from 'src/domains/server/language/en/servers.en';

@Injectable()
export class AuditLoggerService {
  constructor(
    private auditLogService: AuditLogService,
    private readonly logger: CustomLoggerService,
    private readonly serversService: ServersService,
  ) {}

  async create(data: AuditLogRequestInterface) {
    let { request, response, message, event, module, clientIp, submodule } = data || {};
    const { body, url, method, user, query } = request || {};
    const { data: responseData, status } = response || {};
    let { region, project_id } = query || {};
    let region_internal_name: string | undefined = region;
    if (region) {
      try {
        region = await this.serversService.getServerNameByRegion(region);
        region = region.toLowerCase();
      } catch (error) {
        error.message = getServerErrorMessage(error.message);
        this.logger.errorLog(error);
      }
    }
    if (typeof event === 'string') {
      event = event.toLowerCase();
    }

    const apiData: ApiDataInterface | null =
      request && response
        ? {
            payload: body,
            url: url,
            method: method,
            response: responseData,
            status: status,
          }
        : null;

    const attributes: AttributesInterface | null = apiData ? { api_data: apiData } : null;

    const auditLogData: Partial<AuditLogs> = {
      event,
      module,
      user_id: user?.id,
      client_id: user?.clientId,
      email: user?.email,
      created_at: new Date(),
      ip: clientIp,
      message,
      project_id,
      region,
      attributes,
      ...(submodule && { submodule }),
      region_internal_name,
    };
    await this.auditLogService.saveAuditLog(auditLogData);
  }

  async createSchedulerLogs(data: Partial<AuditLogs>[]) {
    await this.auditLogService.saveAuditLog(data);
  }
}
