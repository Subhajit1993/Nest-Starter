import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import SuperLog from '../../lib/superlog';

@Module({
  controllers: [BaseController],
  providers: [BaseService, SuperLog],
})
export class BaseModule {}
