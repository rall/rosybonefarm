import { Controller, Get, Logger, ServiceUnavailableException } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    Logger.log('AppController constructor');
  }

  @Get()
  getData() {
    Logger.log('getData');
    return this.appService.getData();
  }

  @Get('healthcheck')
  async healthcheck() {
    Logger.log('healthcheck');
    try {
      await this.appService.healthcheck();
      return { status: 'ok' };
    } catch (err) {
      return new ServiceUnavailableException('No connection to database');
    }
  }
}
