import { Body, Controller, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { CreateUsersDto } from './dto/create-users.dto'
import { UsersService } from './users.service'

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo tài khoản sinh viên mới' })
  @ApiBody({ type: CreateUsersDto })
  @ApiResponse({ status: 201, description: 'Success', type: CreateUsersDto })
  async create(@Body() dto: CreateUsersDto) {
    return await this.usersService.createUser(dto)
  }
}
