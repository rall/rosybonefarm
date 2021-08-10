import { Injectable, Logger } from '@nestjs/common';
import { Slot } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class SlotService {
  constructor(private prisma: PrismaService) {}

  async createSlot(name?: string): Promise<Slot> {
    Logger.debug('SlotService.createSlot', name);
    return await this.prisma.slot.create({ data: { name } });
  }

  async getAllSlots(): Promise<Slot[]> {
    return await this.prisma.slot.findMany();
  }

}
