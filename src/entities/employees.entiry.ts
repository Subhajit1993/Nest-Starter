//Open questions:
// 1. Where to store customer?
// 2. Where to store Employees?

// TODO

// user_accounts - is for mobile app users
// user_customers -> restaurant_order.userRefId

// user_employees -> restaurant_order.employeeRefId

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurants } from './restaurants.entity';

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ref_id!: string;

  @Column()
  role_id!: string;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  restaurant_id!: number;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.id)
  @JoinColumn({ name: 'restaurant_id', referencedColumnName: 'id' })
  restaurant!: Restaurants;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
