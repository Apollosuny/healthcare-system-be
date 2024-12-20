import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BloodSugarService } from './blood-sugar.service';
import { Prisma } from '@prisma/client';

@Controller('blood-sugar')
export class BloodSugarController {
  constructor(private readonly _bloodSugarService: BloodSugarService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNewRecord(@Body() data: Prisma.BloodSugarCreateInput) {
    return this._bloodSugarService.createNewRecord(data);
  }
}
