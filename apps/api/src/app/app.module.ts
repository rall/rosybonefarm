import { Module } from '@nestjs/common';
import { EggsDozenService } from '../eggs-dozen.service';
import { EggsDozenController } from '../eggs-dozen/eggs-dozen.controller';
import { PrismaService } from '../prisma.service';
import { SalesService } from '../sales.service';
import { SalesController } from '../sales/sales.controller';
import { SlotService } from '../slot.service';
import { SlotsController } from '../slots/slots.controller';
import { UserService } from '../user.service';
import { UsersController } from '../users/users.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    EggsDozenController,
    SlotsController,
    UsersController,
    SalesController,
  ],
  providers: [
    AppService,
    EggsDozenService,
    SlotService,
    PrismaService,
    UserService,
    SalesService,
  ],
})
export class AppModule {}
