import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import ReportsModule from './modules/reports/reports.module';
import initEnvironment from './config/environment';
import initPostgres from './config/postgres';
import initKafka from './config/kafka';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { APILoggingInterceptor } from './shared/interceptors/logging.interceptor';
import { BaseModule } from './modules/base/base.module';
import SuperLog from './lib/superlog';
import { KafkaModule } from '@rob3000/nestjs-kafka';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: APILoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: APILoggingInterceptor,
    },
    SuperLog,
  ],
  imports: [
    // Load Environment Variables
    initEnvironment(),
    //Load Postgres Module
    initPostgres(),
    // Load Kafka Module
    initKafka(),
    ReportsModule,
    BaseModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*'); // Apply Middleware to all routes
  }
}
