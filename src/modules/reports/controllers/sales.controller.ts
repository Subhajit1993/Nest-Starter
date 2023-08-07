import { Controller, Get } from '@nestjs/common';
import { IResponse } from '../../../abstractions/interfaces';
import SuperLogService from '../../../lib/superlog';
import { SalesReportService } from '../services/sales.service';

@Controller('sales') // 'sales' is the base path for all routes in this controller
export class SalesReportController {
  constructor(
    private readonly superLog: SuperLogService,
    private readonly salesReportService: SalesReportService,
  ) {}

  @Get('/')
  // Return Json Object
  async getSalesList(): Promise<IResponse> {
    // this.superLog.relate('ahjjhgjhgasd').info('Health', 'Running...');
    const data = await this.salesReportService.fetchOrderDetails();
    return {
      message: 'Running...',
      data: data,
      success: true,
    };
  }
}
