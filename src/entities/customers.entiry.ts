//Open questions:
// 1. Where to store customer?
// 2. Where to store Employees?

// TODO

// user_accounts - is for mobile app users
// user_customers -> restaurant_order.userRefId

// user_employees -> restaurant_order.employeeRefId

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ref_id!: string;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
