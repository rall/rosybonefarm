import { Injectable, Logger } from '@nestjs/common';
import { EggsDozen, Sale } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async createSale(data: { userId: number, eggsDozenId: number }): Promise<EggsDozen> {
    Logger.debug(`SalesService.createSale user: ${String(data.userId)} eggs: ${String(data.eggsDozenId)}`);
    return await this.prisma.eggsDozen.update({
      where: { id: data.eggsDozenId },
      data: {
        sold: true,
        sale: {
          create: {
            userId: data.userId
          }
        }
      },
    });
  }

  async getAllSales(): Promise<Sale[]> {
    return await this.prisma.sale.findMany();
  }

}
