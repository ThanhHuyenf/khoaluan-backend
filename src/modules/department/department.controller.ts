import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { CreateUsersDto } from '../users/dto/create-users.dto'
import { DepartmentService } from './department.service'

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all department' })
  @ApiResponse({ status: 200, description: 'Success', type: CreateUsersDto })
  async find() {
    return await this.departmentService.findAll()
  }
}
