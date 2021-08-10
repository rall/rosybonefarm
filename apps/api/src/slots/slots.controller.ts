import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { Slot } from '@prisma/client';
import { SlotService } from '../slot.service';

@Controller('slots')
export class SlotsController {
  constructor(private readonly slotService: SlotService) {}


  @Get()
  async findAllSlots():Promise<Slot[]> {
    return await this.slotService.getAllSlots();
  }

  
  @Post()
  async createSlot(
    @Body() postData: { name?: string },
  ): Promise<Slot> {
    const { name } = postData;
    return await this.slotService.createSlot(name);
  }
}
