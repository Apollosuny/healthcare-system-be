import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Prisma } from '@prisma/client';

@Controller('client')
export class ClientController {
  constructor(private readonly _clientService: ClientService) {}

  @Post('/init')
  @HttpCode(HttpStatus.CREATED)
  initClient(dto: Prisma.ClientCreateInput) {
    return this._clientService.init();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getClientData(@Query('search') search: string) {
    return this._clientService.getClientData(search);
  }

  @Get('/bmi')
  @HttpCode(HttpStatus.OK)
  getBMIData() {
    return this._clientService.getBMIData();
  }

  @Get('/average-blood-sugar')
  @HttpCode(HttpStatus.OK)
  getAverageBloodSugar() {
    return this._clientService.getAverageBloodSugar();
  }
}
