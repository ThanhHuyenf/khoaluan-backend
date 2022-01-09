import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Role } from 'src/modules/users/users.enum'

export class getUserByRoleDto {
  @ApiProperty()
  @IsEnum({ enum: Role })
  role: Role
}
