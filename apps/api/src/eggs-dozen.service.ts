import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EggsDozen, Prisma } from '@prisma/client';

@Injectable()
export class EggsDozenService {
  constructor(private prisma: PrismaService) {}

  async getEggsDozens(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;
  }): Promise<EggsDozen[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.eggsDozen.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getEggsInStand(): Promise<unknown[]> {
    Logger.log("service getEggsInStand");
    const foo = await this.prisma.slot.findMany({
      include: {
        eggsDozen: true
      }
    });
    Logger.log(foo);
    return foo;
  }

  async getAllEggs(): Promise<EggsDozen[]> {
    return await this.prisma.eggsDozen.findMany({ where: { sold: false } });
  }

  async createEggsDozen(weight: number): Promise<EggsDozen> {
    return await this.prisma.eggsDozen.create({ data: { weight } as EggsDozen });
  }

  async deleteEggsDozen(where?: Prisma.EggsDozenWhereUniqueInput): Promise<EggsDozen> {
    return this.prisma.eggsDozen.delete({ where });
  }

  async deleteFirstEggsDozen(inStand: true): Promise<number> {
    const num = await this.prisma.eggsDozen.deleteMany({
      where: { inStand },
      take: '1',
      orderBy: { packed: 'ASC' }
    } as Prisma.EggsDozenDeleteManyArgs);
    return num.count;
  }

}
