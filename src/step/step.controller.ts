import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StepService } from './step.service';
import { Prisma } from '@prisma/client';

@Controller('step')
export class StepController {
  constructor(private readonly _stepService: StepService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNewRecord(@Body() dto: Prisma.StepCreateInput) {
    return this._stepService.createNewRecord(dto);
  }
}
