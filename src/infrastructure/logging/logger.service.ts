import * as Sentry from '@sentry/nestjs';
import { Injectable, ConsoleLogger, HttpStatus } from '@nestjs/common';
import { LoggingConfigService } from 'src/config/logging/config.service';
import { ErrorLogInterface, ErrorMetaDataInterface } from 'src/common/interfaces';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  constructor(
    private readonly loggingConfigService: LoggingConfigService,
  ) {
    super();
  }

  auditLog(message: string) {
    console.log('Audit Log:', message);
  }

  errorLog(data: ErrorLogInterface | string | object) {
    let detailedLog = true;
    if (data && !data['request'] && !data['error']) {
      detailedLog = false;
    }

    if (this.loggingConfigService.sentryEnabled) {
      if (!detailedLog) {
        try {
          if (typeof data === 'string') {
            Sentry.captureMessage(data, 'error');
          } else {
            Sentry.captureException(data);
          }
        } catch (error) {
          Sentry.captureException(error);
        }
      } else {
        const { request, error, functionName, config } = data as ErrorLogInterface;
        const errorMetaData: ErrorMetaDataInterface = {
          userId: request?.user?.id,
          email: request?.user?.email,
          method: request.method,
          error,
          functionName,
          route: request.url,
          payload: request.body,
          statusCode: error?.['status'] || HttpStatus.INTERNAL_SERVER_ERROR,
        };
        if (config) {
          errorMetaData.config = config;
        }
        try {
          Sentry.withScope((scope) => {
            Sentry.setUser({ email: request?.user?.email ?? '' });
            scope.setExtras(errorMetaData);
            Sentry.captureException(error);
          });
        } catch (error) {
          Sentry.captureException(error);
        }
      }
    }
  }
}
