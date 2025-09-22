import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenStackDatabaseModule } from './common/service-modules/openstack.database.module';
import { PCIDeviceModule } from './domains/openstack/nova/sub-domains/pci-devices/pci-device.module';

@Module({
  imports: [
    OpenStackDatabaseModule,
    PCIDeviceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
