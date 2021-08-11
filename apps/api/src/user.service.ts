import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: { name?: string, email: string }): Promise<User> {
    Logger.debug(`UserService.createSale email: ${String(data.email)} name: ${String(data.name)}`);
    return await this.prisma.user.create({
      data
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

}
