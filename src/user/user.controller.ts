import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('/clients')
  @HttpCode(HttpStatus.OK)
  findAllClients() {
    return this._userService.getAllClients();
  }
}
