import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BloodSugarService {
  constructor(private readonly _prisma: PrismaService) {}

  async createNewRecord(data: Prisma.BloodSugarCreateInput) {
    return this._prisma.bloodSugar.create({ data });
  }
}
