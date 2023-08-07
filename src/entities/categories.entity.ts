import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurants } from './restaurants.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category_name!: string;

  @Column()
  ref_id!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  restaurant_id!: number;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.id)
  @JoinColumn({ name: 'restaurant_id', referencedColumnName: 'id' })
  restaurant!: Restaurants;
}
