import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurants } from './restaurants.entity';
import { OrderSales } from './order_sales.entity';
import { Categories } from './categories.entity';

@Entity()
export class Menus {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  menu_name!: string;

  @Column()
  ref_id!: string;

  @Column()
  category_id!: number;

  @Column()
  restaurant_id!: number;

  @Column()
  order_id!: number;

  @Column()
  price_per_quantity!: number;

  @Column()
  quantity!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @ManyToOne(() => OrderSales, (order) => order.id)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order!: OrderSales;

  @ManyToOne(() => Categories, (category) => category.id)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category!: Categories;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.id)
  @JoinColumn({ name: 'restaurant_id', referencedColumnName: 'id' })
  restaurant!: Restaurants;
}
