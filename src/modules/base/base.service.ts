import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  getHello(): string {
    return 'Running...';
  }
  getHealth(): string {
    return 'Running...';
  }
}
