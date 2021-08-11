import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Patch, Post, Query } from '@nestjs/common';
import { EggsDozen, Prisma } from '@prisma/client';
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
    try {
      return await this.eggsDozenService.updateSlot(Number(id), slot);
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code == "P2003") {
          throw new HttpException('Slot not found', HttpStatus.NOT_FOUND);
        } else if (error.code == "P2025") {
          throw new HttpException('Eggs dozen not found', HttpStatus.NOT_FOUND);
        }
      } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        throw new HttpException('Database error: probably a constraint violation', HttpStatus.CONFLICT);
      } else {
        throw error;
      }
    }
  }
}
