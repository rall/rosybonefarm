import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
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
    if (!name) {
      throw new BadRequestException('Name is required');
    } else {    
      return await this.slotService.createSlot(name);
    }
  }
}
