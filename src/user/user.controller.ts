import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('/clients')
  @HttpCode(HttpStatus.OK)
  findAllClients() {
    return this._userService.getAllClients();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createNewUser(@Body() dto: Prisma.UserCreateInput) {
    return this._userService.createNewUser(dto);
  }
}
