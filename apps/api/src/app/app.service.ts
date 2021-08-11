import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  async healthcheck() {
    return await this.prisma.$connect();
  }
}
