import { ApiProperty } from '@nestjs/swagger'

export class BaseDto {
  @ApiProperty({ example: '61b6fa6585973498a3035a99' })
  id: string

  @ApiProperty({ example: '2021-12-13T14:46:45.044+07:00' })
  createdAt: string

  @ApiProperty({ example: '2021-12-13T14:46:45.044+07:00' })
  updatedAt: string
}
