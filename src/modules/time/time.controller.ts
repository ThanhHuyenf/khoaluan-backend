import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TimeService} from "./time.service";
import {CreateTimeDto} from "./dto/create-time.dto";
import {TimeDto} from "./dto/time.dto";

@ApiBearerAuth()
@ApiTags('time')
@Controller('time')
export class TimeController {
    constructor(private readonly timeService: TimeService) {}

    @Post()
    @ApiOperation({ summary: 'Tạo mốc thời gian mới' })
    @ApiResponse({ status: 201, description: 'Success', type: TimeDto })
    async create(@Body('time') time: CreateTimeDto){
        return this.timeService.create(time)
    }
    @Get()
    @ApiOperation({ summary: 'Tìm mốc thời gian' })
    @ApiResponse({ status: 200, description: 'Success', type: [TimeDto] })
    async get(){
        return this.timeService.get()
    }
}
