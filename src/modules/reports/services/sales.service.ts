import { Injectable } from '@nestjs/common';
import SuperLogService from '../../../lib/superlog';
import axios from '../../../config/axios';

@Injectable()
export class SalesReportService {
  constructor(private readonly superLog: SuperLogService) {}

  fetchOrderDetailsFromAPI(): string {
    return 'Hello report service';
  }

  async fetchOrderDetails(): Promise<any> {
    return {
      data: [
        {
          id: 1,
          name: 'Order 1',
        },
        {
          id: 2,
          name: 'Order 2',
        },
      ],
    };
  }
}
