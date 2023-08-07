import { IHeaders, KafkaService, SubscribeTo } from '@rob3000/nestjs-kafka';
import { Controller, Inject } from '@nestjs/common';
import { KafkaTopics } from '../../../../abstractions/enums';
import { SalesReportService } from '../../services/sales.service';

@Controller()
export class SalesReportConsumer {
  constructor(
    @Inject('REPORT_SERVICE_KAFKA') private client: KafkaService,
    private readonly salesReportService: SalesReportService,
  ) {}

  onModuleInit(): void {
    this.client.subscribeToResponseOf('topic_0', this);
  }

  @SubscribeTo(KafkaTopics.TOPIC_0)
  async handleOrderPlaced(
    data: any,
    key: any,
    offset: number,
    timestamp: number,
    partition: number,
    headers: IHeaders,
  ): Promise<void> {
    console.log('Received data', data);
    console.log('Received key', key);
    console.log('Received offset', offset);
    console.log('Received timestamp', timestamp);
    console.log('Received partition', partition);
    console.log('Received headers', headers);
    // this.salesReportService.fetchOrderDetails();
  }
}
