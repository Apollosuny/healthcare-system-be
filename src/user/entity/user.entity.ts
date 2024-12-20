import { User, UserRole } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ClientEntity } from 'src/client/entity/client.entity';

export class UserEntity implements User {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  password: string;

  @Expose()
  lastLoginAt: Date;

  @Expose()
  blocked: boolean;

  @Expose()
  role: UserRole;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  @IsOptional()
  @Type(() => ClientEntity)
  client: ClientEntity;
}
