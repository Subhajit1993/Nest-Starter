import { Module } from '@nestjs/common';
import { EmployeeReportController } from './controllers/employee.controller';
import { SalesReportController } from './controllers/sales.controller';
import { SalesReportConsumer } from './controllers/internal/sales.consumer';
import { SalesReportService } from './services/sales.service';
import SuperLog from '../../lib/superlog';

@Module({
  controllers: [
    EmployeeReportController,
    SalesReportController,
    SalesReportConsumer,
  ],
  providers: [SuperLog, SalesReportService],
})
export default class ReportsModule {}
