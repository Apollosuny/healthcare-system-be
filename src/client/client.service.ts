import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class ClientService {
  constructor(private readonly _prisma: PrismaService) {}

  // Refactor this
  async init() {
    const client = await this._prisma.client.create({
      data: {
        firstName: 'Anh',
        lastName: 'Nguyen',
        email: 'tantan@gmail.com',
        dob: new Date('2003-11-08'),
        gender: 'FEMALE',
        phone: '0123412',
        address: 'Hungyen',
        height: 163,
        weight: 48,
        userId: 5,
      },
    });
    if (!client) {
      throw new BadRequestException('Client could not be created');
    }
    return client;
  }

  async getBMIData() {
    const result = await this._prisma.$queryRaw`
      SELECT 
          c.id AS client_id,
          c."firstName" || ' ' || c."lastName" AS full_name,
          ROUND(CAST(c.weight / ((c.height / 100) * (c.height / 100)) AS NUMERIC), 2) AS bmi,
          CASE
              WHEN ROUND(CAST(c.weight / ((c.height / 100) * (c.height / 100)) AS NUMERIC), 2) < 18.5 THEN 'Underweight'
              WHEN ROUND(CAST(c.weight / ((c.height / 100) * (c.height / 100)) AS NUMERIC), 2) BETWEEN 18.5 AND 24.9 THEN 'Normal'
              WHEN ROUND(CAST(c.weight / ((c.height / 100) * (c.height / 100)) AS NUMERIC), 2) BETWEEN 25 AND 29.9 THEN 'Overweight'
              ELSE 'Obese'
          END AS bmi_category
      FROM "Client" c
      WHERE c.height > 0 AND c.weight > 0
      ORDER BY bmi_category, full_name;
    `;
    return result;
  }
}
