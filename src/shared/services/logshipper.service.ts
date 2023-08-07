import { TransporterType } from '../abstractions/enums';

export default class LogShipperService {
  private transports: string[] = [];
  private pid: string;

  constructor(pid: string) {
    this.pid = pid.toLowerCase();
  }

  addTransport(transporterType: TransporterType) {
    this.transports.push(transporterType);
  }

  getTransports(): string[] {
    return this.transports;
  }

  publishCustomLog(
    highlight: string,
    data: string,
    correlation_id: string | undefined,
  ): void {
    if (!this.transports.length) {
      this.addTransport(TransporterType.CONSOLE);
    }
    for (const transport of this.transports) {
      switch (transport) {
        case TransporterType.CONSOLE:
          console.log(
            `[${this.pid}] - [${highlight}] ${
              correlation_id ? correlation_id : ''
            } ${data}`,
          );
          break;
        case TransporterType.FILE:
          break;
        case TransporterType.HTTP:
          break;
        case TransporterType.KAFKA:
          break;
        case TransporterType.LOGSTASH:
          break;
      }
    }
  }

  publishApiLog(
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
    if (!this.transports.length) {
      this.addTransport(TransporterType.CONSOLE);
    }
    for (const transport of this.transports) {
      switch (transport) {
        case TransporterType.CONSOLE:
          console.log(
            `[${this.pid}] - [${version}] - [${status}] - [${method}] - [${api}] - [${duration}] - [${correlation_id}]`,
          );
          break;
        case TransporterType.FILE:
          break;
        case TransporterType.HTTP:
          break;
        case TransporterType.KAFKA:
          break;
        case TransporterType.LOGSTASH:
          break;
      }
    }
  }

  getHealth(): string {
    return 'Running...';
  }
}
