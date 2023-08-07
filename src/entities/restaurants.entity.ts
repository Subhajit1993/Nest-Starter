import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurants {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  restaurant_name!: string;

  @Column()
  ref_id!: string;

  @Column()
  business_ref_id!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
