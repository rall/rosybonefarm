import { BadRequestException, Body, Controller, Get, HttpException, Logger, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  async createUser(
    @Body() postData: { email: string; name?: string }
  ): Promise<User> {
    if (!postData.email) {
      throw new BadRequestException('Email is required');
    } else {
      return await this.userService.createUser(postData);
    }
  }
}
