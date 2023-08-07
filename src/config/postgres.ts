import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { DynamicModule } from '@nestjs/common';
import * as ReportsDB from '../entities';

const initPostgres = async (): Promise<DynamicModule> => {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ReportsDB,
    synchronize: process.env.NODE_ENV !== 'production',
  });
};

export default initPostgres;
