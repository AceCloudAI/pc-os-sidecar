import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OS_API_VERSION, SERVICE_NAME } from 'src/common/constants';

@Injectable()
export class OpenstackConfigService {
  private serviceUrls: { [key: string]: string } = {};
  constructor(private readonly configService: ConfigService) {}

  async setServiceUrls(serviceUrls: { [key: string]: string }): Promise<void> {
    this.serviceUrls = serviceUrls;
  }

  get baseUrl(): string {
    return this.configService.get<string>('openstack.baseUrl');
  }

  get timeout(): number {
    return this.configService.get<number>('openstack.timeout');
  }

  get tokenTimeoutInMinutes(): number {
    return this.configService.get<number>('openstack.tokenTimeoutInMinutes');
  }

  get computeService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.COMPUTE?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.compute;
  }

  get identityService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.IDENTITY?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.identity;
  }

  get glanceService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.GLANCE?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.glance;
  }

  get cinderService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.CINDER?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.cinder;
  }
  get neutronService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.NEUTRON?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.neutron;
  }

  get clusteringService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.CLUSTERING?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.clustering;
  }
  get octaviaService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.OCTAVIA?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.octavia;
  }
  get orchestrationService(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.ORCHESTRATION?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.orchestration;
  }

  getNeutronServiceUrl(): string {
    const serviceUrl = this.serviceUrls[SERVICE_NAME?.NEUTRON?.titleCase] || '';
    return serviceUrl + OS_API_VERSION.neutron;
  }

  // Database configurations - Noida
  get noidaHost(): string {
    return this.configService.get<string>('openstack.database.noida.host');
  }

  get noidaPort(): number {
    return this.configService.get<number>('openstack.database.noida.port');
  }

  get noidaUsername(): string {
    return this.configService.get<string>('openstack.database.noida.username');
  }

  get noidaPassword(): string {
    return this.configService.get<string>('openstack.database.noida.password');
  }

  get noidaNovaDatabase(): string {
    return this.configService.get<string>('openstack.database.noida.database.nova');
  }

  // Database configurations - Atlanta
  get atlantaHost(): string {
    return this.configService.get<string>('openstack.database.atlanta.host');
  }

  get atlantaPort(): number {
    return this.configService.get<number>('openstack.database.atlanta.port');
  }

  get atlantaUsername(): string {
    return this.configService.get<string>('openstack.database.atlanta.username');
  }

  get atlantaPassword(): string {
    return this.configService.get<string>('openstack.database.atlanta.password');
  }

  get atlantaNovaDatabase(): string {
    return this.configService.get<string>('openstack.database.atlanta.database.nova');
  }

  // Database configurations - Mumbai
  get mumbaiHost(): string {
    return this.configService.get<string>('openstack.database.mumbai.host');
  }

  get mumbaiPort(): number {
    return this.configService.get<number>('openstack.database.mumbai.port');
  }

  get mumbaiUsername(): string {
    return this.configService.get<string>('openstack.database.mumbai.username');
  }

  get mumbaiPassword(): string {
    return this.configService.get<string>('openstack.database.mumbai.password');
  }

  get mumbaiNovaDatabase(): string {
    return this.configService.get<string>('openstack.database.mumbai.database.nova');
  }
  get mumbaiNovaApiDatabase(): string {
    return this.configService.get<string>('openstack.database.mumbai.database.nova_api');
  }

  get noidaNovaApiDatabase(): string {
    return this.configService.get<string>('openstack.database.noida.database.nova_api');
  }

  get atlantaNovaApiDatabase(): string {
    return this.configService.get<string>('openstack.database.atlanta.database.nova_api');
  }
}
