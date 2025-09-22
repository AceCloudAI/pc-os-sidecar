import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OpenstackConfigModule, OpenstackConfigService } from 'src/config';
import { PCIDevice } from 'src/domains/openstack/nova/sub-domains/pci-devices/entity/pci-device.entity';
import { OPENSTACK_DB_CONNECTION_NAME } from 'src/common/constants';

@Module({
  imports: [
    // Noida OpenStack Database Connection
    TypeOrmModule.forRootAsync({
      imports: [OpenstackConfigModule],
      name: OPENSTACK_DB_CONNECTION_NAME.noida,
      useFactory: async (openstackConfigService: OpenstackConfigService) => ({
        type: 'mysql',
        host: openstackConfigService.noidaHost,
        port: openstackConfigService.noidaPort,
        username: openstackConfigService.noidaUsername,
        password: openstackConfigService.noidaPassword,
        database: openstackConfigService.noidaNovaDatabase,
        entities: [PCIDevice],
        synchronize: false, // Set to false for production OpenStack databases
      }),
      inject: [OpenstackConfigService],
    }),

    // Atlanta OpenStack Database Connection
    TypeOrmModule.forRootAsync({
      imports: [OpenstackConfigModule],
      name: OPENSTACK_DB_CONNECTION_NAME.atlanta,
      useFactory: async (openstackConfigService: OpenstackConfigService) => ({
        type: 'mysql',
        host: openstackConfigService.atlantaHost,
        port: openstackConfigService.atlantaPort,
        username: openstackConfigService.atlantaUsername,
        password: openstackConfigService.atlantaPassword,
        database: openstackConfigService.atlantaNovaDatabase,
        entities: [PCIDevice],
        synchronize: false, // Set to false for production OpenStack databases
      }),
      inject: [OpenstackConfigService],
    }),

    // Mumbai OpenStack Database Connection
    TypeOrmModule.forRootAsync({
      imports: [OpenstackConfigModule],
      name: OPENSTACK_DB_CONNECTION_NAME.mumbai,
      useFactory: async (openstackConfigService: OpenstackConfigService) => ({
        type: 'mysql',
        host: openstackConfigService.mumbaiHost,
        port: openstackConfigService.mumbaiPort,
        username: openstackConfigService.mumbaiUsername,
        password: openstackConfigService.mumbaiPassword,
        database: openstackConfigService.mumbaiNovaDatabase,
        entities: [PCIDevice],
        synchronize: false, // Set to false for production OpenStack databases
      }),
      inject: [OpenstackConfigService],
    }),
  ],
})
export class OpenStackDatabaseModule {
  constructor() {}
}
