import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly _prisma: PrismaService) {}

  async getAllClients() {
    return this._prisma.$queryRaw`SELECT * FROM "Client"`;
  }
}
