import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@mikro-orm/nestjs";
import {TimeEntity} from "./time.entity";
import {EntityRepository} from "@mikro-orm/core";

@Injectable()
export class TimeService {
    constructor(
        @InjectRepository(TimeEntity)
        private readonly timeRepository: EntityRepository<TimeEntity>
    ) {
    }
}
