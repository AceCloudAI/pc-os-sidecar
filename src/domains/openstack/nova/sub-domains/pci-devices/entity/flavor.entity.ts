import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('flavor_extra_specs')
export class FlavorExtraSpec {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'flavor_id' })
  flavorId: number;

  @Column()
  key: string;

  @Column()
  value: string;
}
