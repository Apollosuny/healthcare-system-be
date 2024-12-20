import { Module } from '@nestjs/common';
import { BloodSugarController } from './blood-sugar.controller';
import { BloodSugarService } from './blood-sugar.service';

@Module({
  controllers: [BloodSugarController],
  providers: [BloodSugarService]
})
export class BloodSugarModule {}
