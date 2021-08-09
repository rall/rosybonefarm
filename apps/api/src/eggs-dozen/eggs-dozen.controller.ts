import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { EggsDozen } from '@prisma/client';
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
    return await this.eggsDozenService.createEggsDozen(weight);
  }



}
