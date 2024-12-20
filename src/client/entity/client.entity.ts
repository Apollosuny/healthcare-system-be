import { Client, Gender } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class ClientEntity implements Client {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  dob: Date;

  @Expose()
  gender: Gender;

  @Expose()
  @IsOptional()
  avatar: string;

  @Expose()
  phone: string;

  @Expose()
  address: string;

  @Expose()
  height: number;

  @Expose()
  weight: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  userId: number;
}
