import { Controller, Get, Logger } from '@nestjs/common';

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
  healthcheck() {
    Logger.log('getData');
    return { ok: true };
  }
}
