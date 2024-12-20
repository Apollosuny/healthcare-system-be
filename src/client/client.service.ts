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
}
