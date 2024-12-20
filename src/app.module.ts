import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { BloodPressureModule } from './blood-pressure/blood-pressure.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ClientModule, BloodPressureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
