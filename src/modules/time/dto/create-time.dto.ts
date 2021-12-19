import { ApiProperty } from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsString} from 'class-validator'
import {Property} from "@mikro-orm/core";

export class CreateTimeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    namHoc: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    maHK: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tgSV: string

    @Property()
    @IsNotEmpty()
    @IsString()
    tgLT: string

    @Property()
    @IsNotEmpty()
    @IsString()
    tgGV: string

    @Property()
    @IsNotEmpty()
    @IsString()
    tgK: string
}
