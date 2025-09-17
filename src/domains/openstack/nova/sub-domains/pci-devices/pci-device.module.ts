import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'src/common/service-modules/logger.module';
import { PCIDeviceService } from './pci-device.service';
import { PCIDevice } from './entity/pci-device.entity';
import { OPENSTACK_DB_CONNECTION_NAME } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([PCIDevice], OPENSTACK_DB_CONNECTION_NAME.noida),
    TypeOrmModule.forFeature([PCIDevice], OPENSTACK_DB_CONNECTION_NAME.mumbai),
    TypeOrmModule.forFeature([PCIDevice], OPENSTACK_DB_CONNECTION_NAME.atlanta),
    LoggerModule,
  ],
  providers: [PCIDeviceService],
  exports: [PCIDeviceService],
})
export class PCIDeviceModule {}
