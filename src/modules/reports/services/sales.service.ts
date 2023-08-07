import { Injectable } from '@nestjs/common';
import SuperLogService from '../../../lib/superlog';
import axios from '../../../config/axios';
import mock_data from '../../../../test/order_resp';

@Injectable()
export class SalesReportService {
  constructor(private readonly superLog: SuperLogService) {}

  fetchOrderDetailsFromAPI(): string {
    return 'Hello report service';
  }

  async fetchOrderDetails(): Promise<any> {
    return mock_data;
  }
}
