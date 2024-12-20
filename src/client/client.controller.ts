import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
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

  @Get('/bmi')
  @HttpCode(HttpStatus.OK)
  getBMIData() {
    return this._clientService.getBMIData();
  }
}
