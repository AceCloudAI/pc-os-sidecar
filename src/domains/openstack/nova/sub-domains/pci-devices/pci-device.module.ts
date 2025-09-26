import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'src/common/service-modules/logger.module';
import { PCIDeviceService } from './pci-device.service';
import { PCIDeviceController } from './pci-device.controller';
import { PCIDevice } from './entity/pci-device.entity';
import { OPENSTACK_DB_CONNECTION_NAME } from 'src/common/constants';
import { FlavorExtraSpec } from 'src/domains/openstack/nova/sub-domains/pci-devices/entity/flavor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PCIDevice, FlavorExtraSpec], OPENSTACK_DB_CONNECTION_NAME.noida),
    TypeOrmModule.forFeature([PCIDevice, FlavorExtraSpec], OPENSTACK_DB_CONNECTION_NAME.mumbai),
    TypeOrmModule.forFeature([PCIDevice, FlavorExtraSpec], OPENSTACK_DB_CONNECTION_NAME.atlanta),
    LoggerModule,
  ],
  controllers: [PCIDeviceController],
  providers: [PCIDeviceService],
  exports: [PCIDeviceService],
})
export class PCIDeviceModule { }
