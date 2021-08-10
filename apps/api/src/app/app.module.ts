import { Module } from '@nestjs/common';
import { EggsDozenService } from '../eggs-dozen.service';
import { EggsDozenController } from '../eggs-dozen/eggs-dozen.controller';
import { PrismaService } from '../prisma.service';
import { SlotService } from '../slot.service';
import { SlotsController } from '../slots/slots.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EggsDozenController, SlotsController],
  providers: [AppService, EggsDozenService, SlotService, PrismaService],
})
export class AppModule {}
