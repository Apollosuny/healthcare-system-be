import { Module } from '@nestjs/common';
import { BloodPressureController } from './blood-pressure.controller';
import { BloodPressureService } from './blood-pressure.service';

@Module({
  controllers: [BloodPressureController],
  providers: [BloodPressureService]
})
export class BloodPressureModule {}
