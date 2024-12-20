import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BloodPressureService {
  constructor(private readonly _prisma: PrismaService) {}

  async createNewRecord(data: Prisma.BloodPressureCreateInput) {
    return this._prisma.bloodPressure.create({ data });
  }
}
