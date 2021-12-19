import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@mikro-orm/nestjs";
import {TimeEntity} from "./time.entity";
import {EntityRepository, wrap} from "@mikro-orm/core";
import {CreateTimeDto} from "./dto/create-time.dto";
import {TimeDto} from "./dto/time.dto";

@Injectable()
export class TimeService {
    constructor(
        @InjectRepository(TimeEntity)
        private readonly timeRepository: EntityRepository<TimeEntity>
    ) {
    }
    public async create(time: CreateTimeDto): Promise<TimeEntity> {
        const timeEntity = new TimeEntity(time.namHoc,time.maHK,time.tgSV,time.tgLT,time.tgGV,time.tgK)
        return this.timeRepository.create(timeEntity)
    }
    public async get(): Promise<TimeEntity[]> {
        return this.timeRepository.findAll()
    }
    public async update(time: TimeDto): Promise<TimeEntity> {
        const existing = await this.timeRepository.findOne({id: time.id})
        wrap(existing).assign(time);
        await this.timeRepository.flush()
        return this.timeRepository.findOne({id: time.id})
    }
}
