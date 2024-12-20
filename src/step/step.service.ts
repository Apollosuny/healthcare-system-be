import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StepService {
  constructor(private readonly _prisma: PrismaService) {}

  async createNewRecord(data: Prisma.StepCreateInput) {
    const record = await this._prisma.step.create({
      data,
    });
    return record;
  }
}
