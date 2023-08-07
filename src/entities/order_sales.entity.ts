// This will contain the logic for order sales report
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurants } from './restaurants.entity';
import { Customers } from './customers.entiry';

@Entity()
export class OrderSales {
  @PrimaryGeneratedColumn()
  id!: number;

  // Add this as foreign key
  @Column()
  ref_id!: string; //OrderService -> primary key

  @Column()
  restaurant_id!: number; // This is the foreign key to restaurants table

  @Column()
  order_id!: string;

  @Column()
  order_type!: string;

  @Column()
  order_device_id!: string;

  @Column()
  order_device_name!: string;

  @Column()
  employee_name!: string;

  @Column()
  employee_ref_id!: string;

  @Column()
  delivery_provider!: string;

  @Column()
  payment_mode!: string;

  @Column()
  order_date_time!: string; // With timezone

  @Column()
  sales_date_time!: string; // With timezone

  @Column()
  sales_tax!: number;

  @Column()
  sales_tax_rate!: number;

  @Column()
  net_sales!: number;

  @Column()
  gross_sales!: number;

  @Column()
  total_tax!: number;

  @Column()
  total_discount!: number;

  @Column()
  tip!: number;

  @Column()
  tip_tax!: number;

  @Column()
  refund_amount!: number;

  @Column()
  void_amount!: number;

  @Column()
  service_fee!: number;

  @Column()
  service_fee_tax!: number;

  @Column()
  service_fee_tax_rate!: number;

  @Column()
  gratuity_amount!: number;

  @Column()
  gratuity_tax!: number;

  @Column()
  gratuity_tax_rate!: number;

  @Column()
  order_status!: string;

  @Column()
  customer_id!: string; // Refer to / user customer table

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.id)
  @JoinColumn({ name: 'restaurant_id', referencedColumnName: 'id' })
  restaurant!: Restaurants;

  @ManyToOne(() => Customers, (customer) => customer.id)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer!: Customers;
}
