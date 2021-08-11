import { BadRequestException, Body, Controller, Get, Logger, Param, Patch, Post, Query } from '@nestjs/common';
import { EggsDozen, Slot } from '@prisma/client';
import { EggsDozenService } from '../eggs-dozen.service';

@Controller('eggs')
export class EggsDozenController {
  constructor(private eggsDozenService: EggsDozenService) {}

  @Get()
  async findAllEggsDozens(@Query('stand') stand?):Promise<unknown[]> {
    Logger.log('find all eggs', stand);
    if (stand) {
      return await this.eggsDozenService.getEggsInStand();
    } else {
      return await this.eggsDozenService.getAllEggs();
    }
  }

  @Post()
  async createEggsDozen(
    @Body() postData: { weight: number },
  ): Promise<EggsDozen> {
    const { weight } = postData;
    if (!weight) {
      throw new BadRequestException('Weight is required');
    } else {    
      return await this.eggsDozenService.createEggsDozen(weight);
    }
  }

  @Patch(':id')
  async updateEggDozenSlot(
    @Param('id') id: string,
    @Body() postData: { slot?: string },
  ): Promise<EggsDozen> {
    const { slot } = postData;
    Logger.debug('patch eggs', slot);
    return await this.eggsDozenService.updateSlot(Number(id), slot);
  }
}
