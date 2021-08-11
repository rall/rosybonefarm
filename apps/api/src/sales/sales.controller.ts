import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { EggsDozen, Prisma, Sale } from '@prisma/client';
import { SalesService } from '../sales.service';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  async create(@Body() postData: { userId: number, eggsDozenId: number }): Promise<EggsDozen> {
    if (!postData.userId || !postData.eggsDozenId) {
      throw new BadRequestException('userId & eggsDozenId both required');
    }
    try {
      return await this.salesService.createSale(postData);
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == "P2014") {
        throw new HttpException('Forbidden', HttpStatus.GONE);
      } else {
        throw error;
      }
    }
  }
  
  @Get()
  async findAllSales():Promise<Sale[]> {
    return await this.salesService.getAllSales();
  }
}
