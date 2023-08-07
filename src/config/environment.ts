import { ConfigModule } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';

const initEnvironment = (): DynamicModule => {
  return ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
  });
};

export default initEnvironment;
