import { Controller, Get } from '@nestjs/common';
import { BaseService } from './base.service';
import { IResponse } from '../../shared/abstractions/interfaces';
import SuperLogService from '../../lib/superlog';

@Controller()
export class BaseController {
  constructor(
    private readonly appService: BaseService,
    private readonly superLog: SuperLogService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  // Return Json Object
  getHealth(): IResponse {
    this.superLog.relate('ahjjhgjhgasd').info('Health', 'Running...');
    return {
      message: 'Running...',
      data: null,
      success: true,
    };
  }
}
