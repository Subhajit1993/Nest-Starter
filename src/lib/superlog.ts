import { Injectable } from '@nestjs/common';
import LogShipperService from '../shared/services/logshipper.service';
import { TransporterType } from '../shared/abstractions/enums';

@Injectable() // This decorator is required for DI of NestJS
export default class SuperLogService {
  private logShipperService: LogShipperService;
  private correlation_id: string | undefined;

  constructor() {
    this.logShipperService = new LogShipperService('report-service');
    this.logShipperService.addTransport(TransporterType.CONSOLE);
    // this.logShipperService.addTransport(TransporterType.LOGSTASH);
  }

  api(
    version: string,
    status: number,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    api: string,
    body: any,
    headers: any,
    response: any,
    duration: number,
    correlation_id: string | undefined,
  ): void {
    this.logShipperService.publishApiLog(
      version,
      status,
      method,
      api,
      this.sanitizeApiData(body),
      headers,
      this.sanitizeApiData(response),
      duration,
      correlation_id,
    );
  }

  info(highlight: string, data: any): void {
    if (data) {
      data = this.sanitizeCustom(data);
    }
    this.logShipperService.publishCustomLog(
      highlight,
      data,
      this.correlation_id,
    );
    this.correlation_id = undefined;
  }

  relate(correlation_id: string): SuperLogService {
    const newLogService = new SuperLogService();
    newLogService.logShipperService = this.logShipperService;
    newLogService.correlation_id = correlation_id;
    return newLogService;
  }

  error(): string {
    return 'Running...';
  }

  sanitizeCustom(data: any): string {
    return JSON.stringify(data, null, 2);
  }

  sanitizeApiData(data: any): string {
    return JSON.stringify(data, null, 2);
  }
}
