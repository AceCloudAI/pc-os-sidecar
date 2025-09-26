import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { PCIDevice } from './entity/pci-device.entity';
import { OPENSTACK_DB_CONNECTION_NAME, REGION_HOST_NAME } from 'src/common/constants';
import { INVALID_REGION } from 'src/domains/cloud/language/en/cloud.en';
import { REPOSITORY_NOT_SET_ERROR } from 'src/domains/openstack/nova/sub-domains/pci-devices/language/en/pci-devices.en';

@Injectable()
export class PCIDeviceService {
  private pciDeviceRepository: Repository<PCIDevice>;

  constructor(
    @InjectRepository(PCIDevice, OPENSTACK_DB_CONNECTION_NAME.noida)
    private readonly pciDeviceNoidaRepository: Repository<PCIDevice>,
    @InjectRepository(PCIDevice, OPENSTACK_DB_CONNECTION_NAME.mumbai)
    private readonly pciDeviceMumbaiRepository: Repository<PCIDevice>,
    @InjectRepository(PCIDevice, OPENSTACK_DB_CONNECTION_NAME.atlanta)
    private readonly pciDeviceAtlantaRepository: Repository<PCIDevice>,
  ) { }

  async fetchAvailableInventory(): Promise<object> {
    if (!this.pciDeviceRepository) {
      throw new Error(REPOSITORY_NOT_SET_ERROR);
    }
    const result = await this.pciDeviceRepository.find({
      where: { deleted_at: IsNull(), deleted: 0, instance_uuid: IsNull() },
    });
    
    return result;
  }

  async fetchAvailableInventoryByProductID(productId: string): Promise<number> {
    if (!this.pciDeviceRepository) {
      throw new Error(REPOSITORY_NOT_SET_ERROR);
    }
    const result = await this.pciDeviceRepository.count({
      where: { product_id: productId, deleted_at: IsNull(), deleted: 0, instance_uuid: IsNull() },
    });
    return result;
  }

  setPciDeviceRepository(region: string): void {
    switch (region) {
      case REGION_HOST_NAME.noida:
        this.pciDeviceRepository = this.pciDeviceNoidaRepository;
        break;
      case REGION_HOST_NAME.mumbai:
        this.pciDeviceRepository = this.pciDeviceMumbaiRepository;
        break;
      case REGION_HOST_NAME.atlanta:
        this.pciDeviceRepository = this.pciDeviceAtlantaRepository;
        break;
      default:
        throw new UnprocessableEntityException(INVALID_REGION);
    }
  }
}
