import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly _prisma: PrismaService) {}

  async getAllClients() {
    return this._prisma.$queryRaw`SELECT * FROM "Client"`;
  }

  async createNewUser(dto: Prisma.UserCreateInput) {
    const user = await this._prisma.user.create({ data: dto });
    return user;
  }
}
