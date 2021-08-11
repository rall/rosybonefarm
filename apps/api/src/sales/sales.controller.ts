import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { EggsDozen, Sale } from '@prisma/client';
import { SalesService } from '../sales.service';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  async create(@Body() postData: { userId: number, eggsDozenId: number }): Promise<EggsDozen> {
    if (!postData.userId || !postData.eggsDozenId) {
      throw new BadRequestException('userId & eggsDozenId both required');
    } else {
      return await this.salesService.createSale(postData);
    }
  }
  
  @Get()
  async findAllSales():Promise<Sale[]> {
    return await this.salesService.getAllSales();
  }
}
