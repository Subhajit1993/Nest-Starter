import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ExceptionFilter,
  NotFoundException,
  ArgumentsHost,
  Injectable,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import SuperLog from '../../lib/superlog';

// TODO: Add the Logstash transport here
@Injectable() // This decorator is required for DI of NestJS
export class APILoggingInterceptor implements NestInterceptor, ExceptionFilter {
  constructor(private readonly superLog: SuperLog) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    const correlation_id = req.headers['x-correlation-id'];
    return next.handle().pipe(
      map((data) => {
        // TODO add api logger here
        console.log(`Delay :  ${Date.now() - now}ms`);
        this.superLog.api(
          'v1',
          200,
          'GET',
          '/api/v1/sales',
          {},
          {},
          data,
          Date.now() - now,
          correlation_id,
        );
        return data;
      }),
      // tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
  }

  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.send('Not Found!');
  }
}
