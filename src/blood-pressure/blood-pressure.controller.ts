import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BloodPressureService } from './blood-pressure.service';
import { Prisma } from '@prisma/client';

@Controller('blood-pressure')
export class BloodPressureController {
  constructor(private readonly _bloodPressureService: BloodPressureService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNewRecord(@Body() dto: Prisma.BloodPressureCreateInput) {
    return this._bloodPressureService.createNewRecord(dto);
  }
}
