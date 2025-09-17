import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('pci_devices')
export class PCIDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  compute_node_id: number;

  @Column({ length: 12, nullable: false })
  address: string;

  @Column({ length: 4, nullable: false })
  product_id: string;

  @Column({ length: 4, nullable: false })
  vendor_id: string;

  @Column({ length: 8, nullable: false })
  dev_type: string;

  @Column({ length: 255, nullable: true })
  dev_id: string | null;

  @Column({ length: 255, nullable: false })
  label: string;

  @Column({ length: 36, nullable: false })
  status: string;

  @Column({ type: 'text', nullable: true })
  extra_info: string | null;

  @Column({ length: 36, nullable: true })
  instance_uuid: string | null;

  @Column({ length: 36, nullable: true })
  request_id: string | null;

  @Column({ nullable: true })
  numa_node: number | null;

  @Column({ length: 12, nullable: true })
  parent_addr: string | null;

  @Column({ length: 36, nullable: true })
  uuid: string | null;

  @Column({ nullable: true })
  deleted: number | null;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  created_at: Date | null;

  @UpdateDateColumn({ type: 'datetime', nullable: true })
  updated_at: Date | null;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deleted_at: Date | null;
}
