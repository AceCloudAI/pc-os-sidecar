import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggingConfigService {
  constructor(private readonly configService: ConfigService) { }

  get sentryEnabled(): string {
    return this.configService.get<string>('logging.sentryEnabled') ?? 'false';
  }
}
