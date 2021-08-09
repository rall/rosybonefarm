import { Module } from '@nestjs/common';
import { EggsDozenService } from '../eggs-dozen.service';
import { EggsDozenController } from '../eggs-dozen/eggs-dozen.controller';
import { PrismaService } from '../prisma.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EggsDozenController],
  providers: [AppService, EggsDozenService, PrismaService],
})
export class AppModule {}
